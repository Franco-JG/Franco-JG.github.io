import { Box, CircularProgress, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Escuchar evento de carga completa (puedes disparar este evento desde Welcome)
    const handleSceneLoaded = () => {
      setTimeout(() => {
        setFadeOut(true);
      }, 500);
    };

    window.addEventListener('scene-loaded', handleSceneLoaded);

    // Tiempo máximo de espera como fallback
    const maxWaitTimer = setTimeout(() => {
      setFadeOut(true);
    }, 8000); // 8 segundos como máximo

    return () => {
      window.removeEventListener('scene-loaded', handleSceneLoaded);
      clearTimeout(maxWaitTimer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.8s ease-out, visibility 0.8s ease-out',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible',
      }}
    >
      <Box
        component="img"
        src="/f.svg"
        alt="Logo"
        sx={{
          width: '80px',
          height: '80px',
          mb: 3,
          filter: 'invert(1)',
          animation: 'pulse 1.5s infinite ease-in-out'
        }}
      />
      <CircularProgress 
        // Sin 'variant="determinate"' para que sea un loop continuo
        size={60} 
        thickness={4}
        sx={{ 
          color: '#0ef',
          mb: 2,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }} 
      />

      <style jsx="true">{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Box>
  );
};

export default Loader;