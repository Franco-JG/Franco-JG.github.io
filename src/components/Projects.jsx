import { Container, Typography, Button, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ProjectsCards from './ProjectsCards';

const Projects = () => {
  
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
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
        Mis Proyectos
      </Typography>
      
      <ProjectsCards/>
      
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<CodeIcon />}
          onClick={() => window.open('https://github.com/Franco-JG', '_blank')}
          sx={{
            borderColor: '#f5f5f5',
            color: '#f5f5f5',
            borderRadius: '50px',
            px: 4,
            py: 1,
            '&:hover': {
              borderColor: '#0ef',
              color: '#0ef',
              backgroundColor: 'rgba(14, 255, 255, 0.05)',
            }
          }}
        >
          Ver más proyectos en GitHub
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;