import { useState, useEffect, useRef, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Stats } from '@react-three/drei';
import { Box, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scene from '../three/scene/Scene';
import lenis from '../utils/lenis';
const Postprocessing = lazy(() => import('../three/scene/Postprocessing'));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);


const WelcomeExperience = ({ onComplete }) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const isMobile = window.innerWidth < 768;
  const containerRef = useRef(null);
  const animationCompleteRef = useRef(false);
  
  useEffect(() => {
    // Forzar scroll al inicio de la página
    window.scrollTo(0, 0);
    
    // Bloquear el scroll más allá de la experiencia de bienvenida
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.position = 'relative';
      mainContent.style.top = '0';
      mainContent.style.pointerEvents = 'none'; // Desactivar interacciones inicialmente
    }
    
    // Crear un contenedor de scroll "fantasma" para extender el área de desplazamiento
    const scrollContainer = document.createElement('div');
    scrollContainer.id = 'scroll-animation-container';
    scrollContainer.style.height = '1000vh'; // Aumentado a 1000vh para tener más espacio de scroll
    scrollContainer.style.width = '100%';
    scrollContainer.style.position = 'absolute';
    scrollContainer.style.top = '0';
    scrollContainer.style.left = '0';
    scrollContainer.style.zIndex = '-1';
    scrollContainer.style.pointerEvents = 'none';
    document.body.appendChild(scrollContainer);
    
    // Create a timeline for the animation based on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Usar el contenedor como trigger
        start: "top top", // Comienza en la parte superior
        end: "+=600vh", // La animación dura 6 veces el alto de la ventana
        scrub: 2, // Hacer el scrub más suave para que la animación sea más fluida
        pin: true, // Mantener el contenedor "fijo" durante toda la animación
        pinSpacing: true, // Crear espacio para el contenido que viene después
        
        onUpdate: (self) => {
          // Actualizar el progreso de la animación
          setAnimationProgress(self.progress);
          
          // Activar contenido cuando la animación está completa al 100%
          if (self.progress >= 1.0 && !animationCompleteRef.current) {
            animationCompleteRef.current = true;
            
            // Habilitar el contenido principal
            if (mainContent) {
              mainContent.style.pointerEvents = 'auto'; // Habilitar interacciones
              mainContent.style.zIndex = 20; // Asegurar z-index adecuado
            }
            
            // Ocultar el contenedor de la experiencia de bienvenida una vez completada
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = 'none';
              containerRef.current.style.zIndex = 5; // Reducir su z-index
            }
            
            // Notificar que la animación está completa después de un pequeño delay
            setTimeout(() => {
              onComplete();
            }, 100);
          }
        },
        // markers: process.env.NODE_ENV === 'development',
      }
    });
    
    // Sincronizar Lenis con ScrollTrigger para scroll suave
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    function update(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(update);
    
    // Limpiar cuando el componente se desmonte
    return () => {
      if (scrollContainer && scrollContainer.parentNode) {
        scrollContainer.remove();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Limpiar Lenis y GSAP
      gsap.ticker.remove(update);
      
      // Restaurar el contenido principal
      if (mainContent) {
        mainContent.style.pointerEvents = 'auto';
      }
    };
  }, [onComplete]);
  
  return (
    <Box 
      ref={containerRef}
      sx={{ 
        height: '100vh', 
        width: '100%', 
        position: 'relative',
        zIndex: animationProgress >= 1.0 ? 5 : 10, // Reducir z-index al finalizar
        overflow: 'hidden',
        pointerEvents: animationProgress >= 1.0 ? 'none' : 'auto', // Desactivar pointer events al finalizar
      }}
    >
      <Canvas
        camera={{ 
          position: isMobile ? [0, 0, 15] : [0, 0, 20],
          fov: 45 
        }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        gl={{
          alpha: false, 
          antialias: false,
          powerPreference: 'high-performance'
        }}
        scene={{
          background: new Color('black')
        }}
        shadows={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* <Stats /> */}
        <Scene progress={animationProgress} isMobile={isMobile} />
        <Postprocessing/>
      </Canvas>
      
      {/* Indicador de progreso (opcional) */}
      {animationProgress >= 0.95 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            textAlign: 'center',
            zIndex: 100,
            opacity: (animationProgress - 0.95) * 20, // Aparece gradualmente
            pointerEvents: 'none', // No debe interferir con clics
          }}
        >
          <Stack 
            direction="row" 
            spacing={1} 
            alignItems="center" 
            justifyContent="center"
          >
            <Typography variant="body1" sx={{ display: 'inline', mb: 0 }}>
              Ver más
            </Typography>
            <ExpandMoreIcon sx={{ fontSize: 28, mt: 0.5 }} /> 
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default WelcomeExperience;