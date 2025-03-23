import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei'
import Navbar from './components/Navbar';
import './styles/App.css';
import { Color } from 'three';
import Experience from './components/Experience';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Scene = lazy(() => import('./three/scene/Scene'));

function App() {
  return (
    <>
      <div className="fixed-canvas">
        <Experience/>
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