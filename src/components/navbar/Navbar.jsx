import { useMemo, useState, useEffect } from 'react';
import { Box, Tooltip, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Elementos de navegación con iconos
  const navItems = useMemo(() => [
    // Se quitó "Home" del array pero lo mantenemos como una sección válida en el código
    { name: 'Sobre Mí', id: 'profile', icon: <PersonIcon /> },
    { name: 'Proyectos', id: 'projects', icon: <CodeIcon /> },
    { name: 'Contacto', id: 'contact', icon: <EmailIcon /> },
  ], []);

  // Scroll a secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset para compensar el navbar en la parte superior
      // const navbarHeight = 80; // Aproximadamente el alto del navbar
      const elementPosition = element.getBoundingClientRect().top;
      // const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      const offsetPosition = elementPosition + window.pageYOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setDrawerOpen(false); // Cierra el drawer móvil después de navegar
    }
  };

  // Detectar sección activa - versión mejorada
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Detección especial para HOME (inicio)
      if (scrollPosition < 100) {
        setActiveSection('home');
        return;
      }
      
      // Detección especial para última sección (si estamos cerca del final del documento)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        // Encuentra la última sección definida en navItems
        const lastSectionId = navItems[navItems.length - 1].id;
        setActiveSection(lastSectionId);
        return;
      }
      
      // Para otras secciones, comprueba cuál está más visible
      let maxVisibleSection = null;
      let maxVisibleArea = 0;
      
      // Primero intenta encontrar la sección con mayor área visible
      for (const item of [...navItems, { id: 'home' }]) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          
          // Si esta sección tiene más área visible que la anterior máxima
          if (visibleHeight > maxVisibleArea && visibleHeight > 0) {
            maxVisibleArea = visibleHeight;
            maxVisibleSection = item.id;
          }
        }
      }
      
      // Si encontramos una sección con área visible, la activamos
      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Verificar la sección activa al cargar la página
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Renderiza los elementos del navbar para versión desktop
  const renderNavItems = () => (
    navItems.map((item) => (
        <Box
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          sx={{
            color: activeSection === item.id ? '#0ef' : 'rgba(255,255,255,0.7)',
            backgroundColor: activeSection === item.id ? 'rgba(14,255,255,0.1)' : 'transparent',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
            px: { xs: 2, sm: 2.5 },
            py: 1,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              transform: 'translateY(-2px)'
            }
          }}
        >
          {item.icon}
          <span style={{ display: isMobile ? 'none' : 'inline' }}>{item.name}</span>
        </Box>
    ))
  );

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

      {/* Navbar principal - versión desktop */}
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: { xs: '10px', sm: '15px', md: '20px' },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 'calc(100% - 32px)', sm: 'auto' },
          maxWidth: '800px',
          zIndex: 10,
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0,0,0,0.7)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          px: 1,
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo siempre visible */}
        <Box
          onClick={() => scrollToSection('home')}
          sx={{ 
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            p: 0.5,
          }}
        >
          <Box
            component="img"
            src="f.svg"
            alt="Logo"
            sx={{
              height: '32px',
              filter: activeSection === 'home' ? 'invert(1)' : 'invert(1) grayscale(1) brightness(0.7)',
              transition: 'all 0.3s ease',
              '&:hover': {
                filter: 'invert(1)',
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>

        {/* Menú desktop */}
        {!isMobile && (
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {renderNavItems()}
          </Box>
        )}

        {/* Botón de menú para móviles */}
        {isMobile && (
          <IconButton 
            onClick={() => setDrawerOpen(true)} 
            sx={{ color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* Menú móvil (drawer) */}
      <Drawer
        anchor="right"
        open={isMobile && drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiPaper-root': {
            width: '70%',
            maxWidth: '300px',
            backgroundColor: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: activeSection === item.id ? '#0ef' : '#fff',
                py: 2,
                borderLeft: activeSection === item.id ? '3px solid #0ef' : '3px solid transparent',
                backgroundColor: activeSection === item.id ? 'rgba(14,255,255,0.05)' : 'transparent',
                display: 'flex',
                gap: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }
              }}
            >
              {item.icon}
              {item.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;