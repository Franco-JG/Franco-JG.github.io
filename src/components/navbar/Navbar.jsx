import { useMemo, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './Navbar.css'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Memoriza los elementos de navegación para evitar re-renderizados innecesarios
  const navItems = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'Sobre Mí', id: 'profile' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' },
  ], []);

  // Función para manejar el scroll suave a las secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(id);
    }
  };

  // Detecta qué sección está visible en la pantalla
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para detectar antes de llegar completamente a la sección

      // Encuentra la sección actualmente visible
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Verificar la sección activa al cargar la página
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Fondo con efecto de blur - optimizado */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "120px", sm: "150px", md: "200px" },
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* Capa de fondo con efecto de blur */}
        {[...Array(8)].map((_, index) => (
          <Box key={index} className="blur-layer" />
        ))}
      </Box>

      {/* Navbar con fondo negro sólido */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: { xs: '10px', sm: '15px', md: '20px' },
          left: '50%',
          transform: 'translateX(-50%)',
          height: '40px',
          maxWidth: '800px',
          zIndex: 2,
          borderRadius: '15px',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Contenedor para todo el contenido del navbar */}
        <Box 
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly', 
            alignItems: 'center',
          }}
        >
          {/* Enlaces de navegación */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flex: '1 1 auto',
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => scrollToSection('home')}
              sx={{ 
                display: 'flex',
                cursor: 'pointer',
              }}
            >
              <Box
                component="img"
                src="f.svg"
                alt="Logo"
                sx={{
                  height: '40px',
                  filter: 'invert(1) grayscale(1) brightness(0.5)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'invert(1)',
                  },
                }}
              />
            </Box>
            
            {navItems.slice(1).map((item) => (
              <Box
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: activeSection === item.id ? 'rgba(250,216,0,1.0)' : 'rgba(255,255,255,0.5)',
                  backgroundColor: activeSection === item.id ? 'rgba(255,216,0,0.2)' : 'transparent',
                  padding: '5px 10px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  borderRadius: '12px',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'auto',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontSize: { xs: '13px', sm: '14px', md: '16px' },
                  padding: { xs: '4px 8px', sm: '5px 10px', md: '5px 12px' },
                  
                }}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;