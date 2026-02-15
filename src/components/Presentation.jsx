import { Box, Typography, Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';

const Presentation = () => {
  // Función para scroll a sección de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{
      flex: { xs: '1', md: '0 1 45%' },
      maxWidth: { md: '580px' }
    }}>
      <Typography
        variant="h3"
        sx={{
          color: '#f5f5f5',
          fontWeight: 'bold',
          mb: 1
        }}
      >
        Hola
      </Typography>

      <Typography variant="h3" sx={{ mb: 1 }}>
        Soy <span style={{ color: '#ff5cb8', fontWeight: 'bold' }}>Franco</span>,
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: '#0ef',
          fontWeight: 'bold',
          mb: 3
        }}
      >
        {/* Desarrollador. */}
        <Typewriter
          options={
            {
              strings: [
                'Fullstack Developer',
                'Problem Solver',
                'Tech Enthusiast'
              ],
              autoStart: true,
              loop: true,
            }
          }
        />
      </Typography>

      {/* Texto adicional */}
      <Typography variant="body1" sx={{ mb: 3, color: '#f5f5f5' }}>
        Apasionado de la tecnología.
      </Typography>

      {/* Iconos sociales */}
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        {/* GitHub */}
        <Box
          sx={{ color: '#ff5cb8', fontSize: '1.8rem', cursor: 'pointer' }}
          onClick={() => window.open('https://github.com/Franco-JG', '_blank')}
        >
          <GitHubIcon fontSize="inherit" />
        </Box>

        {/* LinkedIn */}
        <Box
          sx={{ color: '#ff5cb8', fontSize: '1.8rem', cursor: 'pointer' }}
          onClick={() => window.open('https://www.linkedin.com/in/jefte-franco/', '_blank')}
        >
          <LinkedInIcon fontSize="inherit" />
        </Box>

        {/* <Box sx={{ color: '#ff5cb8', fontSize: '1.8rem', cursor: 'pointer' }}>
              <FacebookIcon fontSize="inherit" />
            </Box> */}

        {/* Portfolio/Website */}
        {/* <Box
          sx={{ color: '#ff5cb8', fontSize: '1.8rem', cursor: 'pointer' }}
          onClick={() => window.open('https://geovani-franco.me', '_blank')}
        >
          <LanguageIcon fontSize="inherit" />
        </Box> */}

        {/* <Box sx={{ color: '#ff5cb8', fontSize: '1.8rem', cursor: 'pointer' }}>
              <TwitterIcon fontSize="inherit" />
            </Box> */}
      </Stack>

      {/* Botones de acción */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          onClick={scrollToContact}
          sx={{
            borderColor: '#f5f5f5',
            color: '#f5f5f5',
            borderRadius: '50px',
            px: 3,
            '&:hover': {
              borderColor: '#0ef',
              color: '#0ef'
            }
          }}
        >
          CONTÁCTAME
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          component="a"
          href="/CV_FrancoCen.pdf"
          download="CV_Franco_Cen.pdf"
          sx={{
            bgcolor: '#ff5cb8',
            borderRadius: '50px',
            px: 3,
            textDecoration: 'none',
            '&:hover': {
              bgcolor: '#d64a98'
            }
          }}
        >
          DESCARGAR CV
        </Button>
      </Stack>
    </Box>
  )
}

export default Presentation;