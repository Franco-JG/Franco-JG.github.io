import { useLayoutEffect, useRef, useState, Suspense, lazy } from 'react';
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';

import Scene from "./three/Scene";
const Postprocessing = lazy(() => import('./three/Postprocessing'));

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const welcomeRef = useRef();
  const isMobile = window.innerWidth < 768;
  const [animationProgress, setAnimationProgress] = useState(0);

  useLayoutEffect(() => {
    // Resetear scroll al inicio
    window.scrollTo(0, 0);

    // Obtener referencia al elemento
    const welcomeElement = welcomeRef.current;

    // Crear ScrollTrigger que mantiene el Welcome fijado durante el scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: welcomeElement,
      start: "top top", // Comienza cuando el top del elemento llega al top de la ventana
      end: "+=200%", // Define cuánto scroll se necesita para completar la animación (4x la altura)
      pin: true, // Mantiene el elemento fijado durante la animación
      scrub: 3, // Suaviza el efecto al hacer scroll (valor mayor = más suave)
      markers: false, // Útil para depuración, true para desarrollo
      anticipatePin: 1, // Mejora el rendimiento
      onUpdate: (self) => {
        // Pasamos el progreso al Scene como state
        setAnimationProgress(self.progress);
      }
    });

    return () => {
      // Limpieza al desmontar
      scrollTrigger.kill();
    };
  }, []);

  return (
    <Box
      ref={welcomeRef}
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
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
      >
        <Suspense fallback={null}>
          <Scene progress={animationProgress} />
          {/* <Postprocessing/> */}
        </Suspense>
      </Canvas>

      {/* Indicador de progreso (aparece al final) */}
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
            pointerEvents: 'none', // No debe interferir con clicks
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
}

export default Welcome;