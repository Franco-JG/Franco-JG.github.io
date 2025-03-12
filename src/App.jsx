import { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import LoadingBar from './LoadingBar';

// Lazy load components
const Sphere = lazy(() => import('./Sphere'));
const Particles = lazy(() => import('./Particles'));
const Postprocessing = lazy(() => import('./Postprocessing'));


function App() {
  return (
    <>
      <Canvas
        style={{ height: '100vh', width: '100vw', background: 'black' }}
        camera={{ position: [35, -10, 22], fov: 45}}
        dpr={window.devicePixelRatio}
      >
        <Suspense fallback={<LoadingBar/>}>
          <Sphere />
          <Particles />
          <Postprocessing />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
