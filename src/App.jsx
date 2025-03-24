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
    
    // Precargar los componentes del Home para mayor rapidez
    // const loadHome = import('./pages/Home');
    
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
      <div 
        id="main-content"
        style={{ 
          position: 'relative',
          opacity: animationComplete ? 1 : 0,
          transition: 'opacity 1s ease-in',
          pointerEvents: animationComplete ? 'auto' : 'none',
          // Ya no necesitamos marginTop aquí porque ScrollTrigger con pin
          // y pinSpacing creará el espacio necesario
        }}
      >
        <Router>
          <Navbar />
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
        </Router>
      </div>
    </div>
  );
}

export default App;