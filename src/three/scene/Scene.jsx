import { useThree } from '@react-three/fiber';
import { useRef, lazy, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lenis from '../../utils/lenis';
import { setupAnimations, setupLenisWithGSAP } from './animations';
import Circle from '../mesh/Circle';


const Particles = lazy(() => import('../mesh/Particles'));

const Scene = () =>{
  const ref = useRef();
  const { camera } = useThree(); // Accede a la cámara de Three.js
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    //Configurar Lenis con gsap
    const cleanup = setupLenisWithGSAP(lenis);

    return cleanup;
  }, []);

  useLayoutEffect(() => {
    
    setupAnimations(ref, camera, isMobile);

  }, [camera, isMobile]);

  return (
      <group ref={ref}>
        {/* <axesHelper args={[20]} /> */}
        <Circle/>
        <Particles />
      </group>
  );
}

export default Scene;