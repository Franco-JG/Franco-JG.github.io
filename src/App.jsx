import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';
import WelcomeExperience from './components/WelcomeExperience';
import { initSmoothScroll } from './utils/lenis';
import { Typography } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Asegurar que el scroll esté al inicio al cargar la página
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Contenedor para la experiencia de bienvenida */}
      <WelcomeExperience onComplete={() => setAnimationComplete(true)} />
      
      {/* Router y contenido principal - aparece después de la experiencia de bienvenida */}
      <Router>
        <div 
          id="main-content"
          style={{ 
            position: 'relative',
            opacity: animationComplete ? 1 : 0,
            transition: 'opacity 1s ease-in',
            pointerEvents: animationComplete ? 'auto' : 'none',
            zIndex: animationComplete ? 20 : -1, // Asegurar que tenga un z-index adecuado
          }}
        >
          <Navbar animationComplete={animationComplete} />
          <Suspense fallback={
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h5">Cargando...</Typography>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;