import { useRef, useEffect, lazy } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const Circle = lazy(() => import('../mesh/Circle'));
const Particles = lazy(() => import('../mesh/Particles'));

const Scene = ({ progress, isMobile }) => {
  const groupRef = useRef();
  const { camera } = useThree();
  
  // Update animations directly based on scroll progress
  useFrame(() => {
    if (groupRef.current) {
      // Rotation animation
      groupRef.current.rotation.x = -Math.PI / 4 * progress;
      groupRef.current.rotation.y = -Math.PI / 3 * progress;
      
      // Position animation
      groupRef.current.position.x = (isMobile ? 2 : 10) * progress;
      groupRef.current.position.y = (isMobile ? -5 : 0) * progress;
      groupRef.current.position.z = -10 * progress;
      
      // Camera animation
      camera.position.x = (isMobile ? 5 : 10) * progress;
      camera.lookAt(0, 0, -10 * progress);
    }
  });

  return (
    <group ref={groupRef}>
      {/* <axesHelper args={[20]} /> */}
      <Circle />
      <Particles />
    </group>
  );
};

export default Scene;