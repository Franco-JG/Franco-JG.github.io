import { lazy } from 'react';
// Lazy load components
const Particles = lazy(() => import('./Particles'));
const Postprocessing = lazy(() => import('./Postprocessing'));

function Scene() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={3.5}
        />
      </mesh>
      <Particles />
      <Postprocessing />
    </>
  );
}

export default Scene;
