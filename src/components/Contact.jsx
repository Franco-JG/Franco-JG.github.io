import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    Container, 
    Grid2, 
    Paper, 
    Stack,
    IconButton
  } from '@mui/material';

  import EmailIcon from '@mui/icons-material/Email';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LanguageIcon from '@mui/icons-material/Language';
  import WhatsappIcon from '@mui/icons-material/WhatsApp';
  
  const Contact = () => {
    return (
      <Container maxWidth="lg" id="contact" sx={{ py: 10 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            mb: 6,
            background: 'linear-gradient(90deg, #0ef, #ff5cb8)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Contáctame
        </Typography>
        
        <Grid2 container spacing={4} justifyContent="center">
          {/* Información de contacto */}
          <Grid2 xs={12} md={5}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 4, 
                height: '100%',
                backgroundColor: 'rgba(30, 30, 60, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: '#0ef', fontWeight: 'bold' }}>
                ¡Hablemos!
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 4, color: '#f5f5f5' }}>
                Estoy interesado en oportunidades de desarrollo frontend. Si tienes alguna pregunta o propuesta, no dudes en contactarme.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#ff5cb8', mb: 1 }}>
                  CONTACTO DIRECTO
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#f5f5f5', 
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': { color: '#0ef' }
                  }}
                  onClick={() => window.location.href = 'mailto:jeftefranco@outlook.com'}
                >
                  <EmailIcon sx={{ mr: 1, color: '#ff5cb8' }}/>
                  jeftefranco@outlook.com
                </Typography>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#ff5cb8', mb: 1 }}>
                  REDES SOCIALES
                </Typography>
                
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <IconButton 
                    onClick={() => window.open('https://github.com/Franco-JG', '_blank')}
                    sx={{ 
                      color: '#f5f5f5',
                      '&:hover': { color: '#ff5cb8' }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  
                  <IconButton 
                    onClick={() => window.open('https://www.linkedin.com/in/jefte-franco/', '_blank')}
                    sx={{ 
                      color: '#f5f5f5',
                      '&:hover': { color: '#ff5cb8' }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  
                  <IconButton 
                    onClick={() => window.open('https://geovani-franco.me', '_blank')}
                    sx={{ 
                      color: '#f5f5f5',
                      '&:hover': { color: '#ff5cb8' }
                    }}
                  >
                    <LanguageIcon />
                  </IconButton>

                  <IconButton 
                    onClick={() => window.open('https://wa.me/+529833271055', '_blank')}
                    sx={{ 
                      color: '#f5f5f5',
                      '&:hover': { color: '#25D366' }
                    }}
                  >
                    <WhatsappIcon />
                  </IconButton>
                </Stack>
              </Box>
              
              <Typography variant="body2" sx={{ color: '#f5f5f5', opacity: 0.7, mt: 'auto' }}>
                Respondo normalmente dentro de 24-48 horas.
              </Typography>
            </Paper>
          </Grid2>
          
        </Grid2>
      </Container>
    );
  };
  
  export default Contact;