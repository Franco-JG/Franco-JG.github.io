import { useMemo } from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  // Uso de window.matchMedia para detectar cambios de tamaño
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
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
          height: isMobile ? "150px" : "200px",
          zIndex: 1,
          pointerEvents: "none",
          // border: '1px solid red'
        }}
      >
        {/* Capa de fondo con efecto de blur */}
        {[...Array(8)].map((_, index) => (
          <Box key={index} className="blur-layer" />
          // console.log(index)
        ))}
      </Box>


      {/* Navbar con fondo negro sólido */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobile ? '60%' : '40%', // Más ancho en móvil para evitar desbordamiento
          height: '45px',
          maxWidth: '800px',
          zIndex: 1,
          borderRadius: '15px',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          // padding: '0 5px', // Reducir padding en móvil
        }}
      >
        {/* Links de navegación */}
        <Box 
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            flexWrap: 'nowrap', // Evita el salto de línea
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center',
            // marginRight: isMobile ? '5px' : '10px'
          }}>
            <Box
              component="img"
              src="f.svg"
              alt="Logo"
              sx={{
                height: '30px',
                width: 'auto',
                filter: 'invert(1) grayscale(1) brightness(0.5)',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'invert(1)', // El logo se vuelve blanco al hover
                }
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
                textDecoration: 'none',
                fontSize: isMobile ? '14px' : '16px', // Reducir tamaño de fuente en móvil
                fontWeight: 600,
                transition: 'all 0.3s ease',
                alignSelf: 'center',
                padding: isMobile ? '5px 8px' : '5px 15px', // Menor padding en móvil
                borderRadius: '15px',
                position: 'relative',
                whiteSpace: 'nowrap', // Evitar que el texto se corte
              }}
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
              {item.name}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;