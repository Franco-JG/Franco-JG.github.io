import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { useRef, lazy, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Color } from 'three';

const Particles = lazy(() => import('./Particles'));
const Postprocessing = lazy(() => import('./Postprocessing'));

function Sphere(){
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color= {new Color("rgb(255, 255, 255)")}
        emissive={new Color("rgb(255, 255, 255)")}
        emissiveIntensity={5.5}
      />
    </mesh>
  );
}

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

function Scene() {
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Animación de rotación en Y y Z
    tl.current.to(
      ref.current.rotation,
      {
        duration: 3,
        y: Math.PI * 2, // Rotación completa en Y
        z: Math.PI / 4, // Rotación de 45 grados en Z
      },
      0
    );
  }, []);

  return (
    <>
      <OrbitControls  />
      <ScrollControls pages={3} damping={0.25}>
        <group ref={ref}>
          <Sphere/>
          <Particles />
        </group>
      </ScrollControls>
      <Postprocessing />
    </>
  );
}

export default Scene;