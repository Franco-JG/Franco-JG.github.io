import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, useScrollTrigger, Slide, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

// Crearemos un Navbar que aparezca solo cuando se haya desplazado más allá de la experiencia de bienvenida
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Mostrar el navbar solo cuando se haya hecho scroll más allá de la pantalla inicial
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostrar el navbar después de la experiencia de bienvenida
      if (scrollPosition > windowHeight * 0.1) { // Mostramos el navbar después de hacer un poco de scroll
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Slide appear={false} direction="down" in={isVisible}>
      <AppBar position="fixed" color="default" elevation={4} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Mi Portfolio
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              component={Link} 
              to="/" 
              color="inherit" 
              sx={{ 
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)'
                }
              }}
            >
              Inicio
            </Button>
            <Button 
              component={Link} 
              to="/about" 
              color="inherit"
              sx={{ 
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)'
                }
              }}
            >
              Sobre Mí
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;