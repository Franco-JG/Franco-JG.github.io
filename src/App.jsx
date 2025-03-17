import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import './styles/App.css';
import Postprocessing from './three/Postprocessing';
import { Color } from 'three';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Scene = lazy(() => import('./three/Scene'));

function App() {
  return (
    <>
      <div className="fixed-canvas">
        <Canvas
          camera={{ position: [10, -3, 20], fov: 45 }}
          dpr={window.devicePixelRatio}
          gl={{alpha: false, antialias: true}}
          scene={{background: new Color(0x000000)}}
          >
          <fog attach="fog" args={['#ffffff', 10, 50]} />
            <Scene />
        </Canvas>
      </div>
      {/* <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router> */}
    </>
  );
}

export default App;