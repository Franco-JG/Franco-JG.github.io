import { Billboard } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, lazy, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Color } from 'three';
import lenis from '../utils/lenis';

const Particles = lazy(() => import('./Particles'));
const Postprocessing = lazy(() => import('./Postprocessing'));

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={new Color("rgb(255, 255, 255)")}
        emissive={new Color("rgb(255, 255, 255)")}
        emissiveIntensity={5.5}
        // wireframe
      />
    </mesh>
  );
}

function Circle(){
  return(
    <Billboard
    >
      <mesh>
        <circleGeometry args={[0.5, 16]} />
        <meshStandardMaterial
          color={new Color("rgb(255, 255, 255)")}
          emissive={new Color("rgb(255, 255, 255)")}
          emissiveIntensity={5.5}
          // wireframe
        />
      </mesh>
    </Billboard>
  )
}

function Scene() {
  const ref = useRef();
  const tl = useRef();
  const { camera } = useThree(); // Accede a la cámara de Three.js
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Conectar Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
  
    // Configurar GSAP para usar Lenis
    gsap.ticker.lagSmoothing(0);
    
    function update(time) {
      lenis.raf(time * 1000);
    }
    
    gsap.ticker.add(update);
  
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap.timeline({
      scrollTrigger: {
      trigger: document.documentElement, // Usa el elemento raíz del documento
      start: "top top",
      end: "bottom bottom",
      scrub: true, // hace que el timeline se sincronice con el scroll
      markers: true, // activa para debuggear
      }
    });

    // Animación del mesh
    tl.current.to(
      ref.current.rotation,
      {
        duration: 3,
        x: -Math.PI / 4, // 45 grados
        y: -Math.PI / 3, // 120 grados
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 3,
        x: isMobile ? 2 : 10,
        y: isMobile ? -5 : 0,
        z: -10,
        ease: "power2.in",
      },
      0
    );

    // Animación de la cámara (paneo paralelo)
    tl.current.to(
      camera.position,
      {
        duration: 3,
        x: isMobile ? 5 : 10, // Mueve la cámara hacia la derecha en el eje X
        onUpdate: () => camera.lookAt(0,0,-10),
      },
      0
    );

    // return () => {
    //   ScrollTrigger.kill(); // limpia los triggers al desmontar
    // };

  }, [camera]);

  return (
    <>
      <group ref={ref}>
        <axesHelper args={[20]} />
        <Circle/>
        <Particles />
      </group>
      <Postprocessing />
    </>
  );
}

export default Scene;