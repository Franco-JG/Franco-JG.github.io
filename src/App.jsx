import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import './styles/App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Scene = lazy(() => import('./three/Scene'));

function App() {
  return (
    <>
      <div className="fixed-canvas">
        <Canvas
          style={{ height: '100vh', width: '100vw', background: 'black' }}
          camera={{ position: [17, -5, 11], fov: 45 }}
          dpr={window.devicePixelRatio}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;