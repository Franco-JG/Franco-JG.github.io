import { useMemo } from 'react';
import { Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();

  // Memoriza los elementos de navegación para evitar re-renderizados innecesarios
  const navItems = useMemo(() => [
    { name: 'Proyectos', path: '/projects' },
    { name: 'Sobre Mí', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ], []);

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
          // width: { xs: '90 %', sm: '75%', md: '50%', lg: '40%' },
          // height: { xs: '40px', sm: '45px', md: '50px' },
          height: '40px',
          maxWidth: '800px',
          zIndex: 2,
          borderRadius: '15px',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center', // Centrado vertical
        }}
      >
        {/* Contenedor para todo el contenido del navbar */}
        <Box 
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly', // Espacio igual entre elementos
            alignItems: 'center', // Centrado vertical
            // outline: '1px solid blue'
          }}
        >
          {/* Enlaces de navegación */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly', // Espacio igual entre elementos
              alignItems: 'center', // Centrado vertical
              flex: '1 1 auto', // Toma el espacio disponible pero respeta otros elementos
              // outline: '1px solid green',
            }}
          >
            {/* Logo */}
            <Link to="/" style={{ 
              display: 'flex', 
              // alignItems: 'center', // Centrado vertical
              // outline: '1px solid white',
            }}>
              <Box
                component="img"
                src="f.svg"
                alt="Logo"
                sx={{
                  height: '40px',
                  filter: 'invert(1) grayscale(1) brightness(0.5)',
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'invert(1)', // El logo se vuelve blanco al hover
                  },
              // outline: '1px solid black',

                  
                }}
              />
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? 'rgba(250,216,0,1.0)' : 'rgba(255,255,255,0.5)',
                  backgroundColor: location.pathname === item.path ? 'rgba(255,216,0,0.2)' : 'transparent',
                  padding: '5px 10px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  borderRadius: '12px',
                  position: 'relative',
                  whiteSpace: 'nowrap', // Evitar que el texto se corte
                  display: 'flex',
                  alignItems: 'center', // Centrado vertical
                  justifyContent: 'center', // Centrado horizontal
                  width: 'auto', // Ancho automático basado en el contenido
                  // outline: '1px solid red'
                }}
                // className="nav-link"
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }
                }}
              >
                <span style={{
                  fontSize: { xs: '13px', sm: '14px', md: '16px' },
                  padding: { xs: '4px 8px', sm: '5px 10px', md: '5px 12px' },
                  display: 'block', // Asegura que el espacio se aplica correctamente
                }}>
                  {item.name}
                </span>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;