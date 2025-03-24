import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton,
  Slide,
  useTheme, 
  useMediaQuery,
  Container,
  Tooltip,
  alpha,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ animationComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (animationComplete && scrollPosition > windowHeight * 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    if (animationComplete) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationComplete]);
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <GitHubIcon />, 
      url: 'https://github.com/Franco-JG', 
      color: '#333333'
    },
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon />, 
      url: 'https://linkedin.com/in/yourprofile', 
      color: '#0077b5'
    },
    { 
      name: 'Twitter', 
      icon: <TwitterIcon />, 
      url: 'https://twitter.com/yourusername', 
      color: '#1DA1F2'
    },
    { 
      name: 'Email', 
      icon: <EmailIcon />, 
      url: 'mailto:your.email@example.com', 
      color: '#D44638'
    },
  ];

  const navItems = [
    { name: 'Inicio', path: '/', icon: <HomeIcon /> },
    { name: 'Sobre Mí', path: '/about', icon: <PersonIcon /> }
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <Slide appear={false} direction="down" in={isVisible}>
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: alpha(theme.palette.background.default, 0.7),
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          color: theme.palette.text.primary,
          zIndex: 9999, // Aumentado significativamente
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography 
              variant="h6" 
              component={Link}
              to="/"
              sx={{ 
                flexGrow: { xs: 1, md: 0 }, 
                fontWeight: 700, 
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'auto', // Forzar pointer-events
              }}
            >
              F
            </Typography>

            {/* Navigation - Desktop */}
            {!isMobile && (
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                mx: 2,
                flexGrow: 1,
                justifyContent: 'center',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10,
              }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name}
                    component={Link} 
                    to={item.path} 
                    color="inherit"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ 
                      fontWeight: 500,
                      opacity: location.pathname === item.path ? 1 : 0.7,
                      position: 'relative',
                      zIndex: 2,
                      pointerEvents: 'auto',
                      '&:hover': {
                        opacity: 0.9,
                        backgroundColor: 'transparent'
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: location.pathname === item.path ? '100%' : '0%',
                        height: '2px',
                        bottom: '0',
                        left: '0',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '100%'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Social Icons - Desktop */}
            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                gap: 1, 
                alignItems: 'center',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10,
              }}>
                {socialLinks.map((link) => (
                  <Tooltip key={link.name} title={link.name} arrow placement="bottom">
                    <IconButton
                      component="a"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        color: 'inherit',
                        opacity: 0.7,
                        position: 'relative',
                        zIndex: 2,
                        pointerEvents: 'auto',
                        '&:hover': {
                          opacity: 1,
                          color: link.color
                        },
                        transition: 'all 0.2s ease'
                      }}
                      size="small"
                    >
                      {link.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            )}

            {/* Hamburger Menu - Mobile */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ 
                  ml: 2,
                  pointerEvents: 'auto',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            '& .MuiDrawer-paper': {
              width: '75%',
              maxWidth: 300,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.background.default,
              backgroundImage: 'none',
              boxShadow: 3,
            },
            zIndex: 10000,
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Menú</Typography>
            <IconButton onClick={toggleMobileMenu} edge="end" color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          
          {/* Navigation Links */}
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.name}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={() => {
                  toggleMobileMenu();
                }}
                sx={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  backgroundColor: location.pathname === item.path 
                    ? alpha(theme.palette.primary.main, 0.1)
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                <ListItemIcon sx={{ 
                  color: location.pathname === item.path 
                    ? theme.palette.primary.main
                    : 'inherit'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    fontWeight: location.pathname === item.path ? 600 : 400
                  }}
                />
              </ListItem>
            ))}
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Social Links in Mobile */}
          <Box sx={{ 
            p: 2, 
            display: 'flex', 
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 1
          }}>
            {socialLinks.map((link) => (
              <Tooltip key={link.name} title={link.name} arrow>
                <IconButton
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'inherit',
                    '&:hover': {
                      color: link.color
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
          
          {/* Copyright or additional info */}
          <Box sx={{ mt: 'auto', p: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Franco JG
            </Typography>
          </Box>
        </Drawer>
      </AppBar>
    </Slide>
  );
};

export default Navbar;