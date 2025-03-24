import React from 'react';
import { Box, Container, Typography, Grid2 } from '@mui/material';
import Content from '../components/Content';

const Home = () => {
  return (
    <Box sx={{ 
      pt: 4, // Proporciona algo de espacio en la parte superior
      minHeight: '100vh' // Asegura que tenga suficiente contenido
    }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 xs={12}>
            <Typography variant="h2" gutterBottom>
              Mi Portfolio
            </Typography>
            <Typography variant="h5" color="textSecondary">
              Bienvenidos a mi portfolio. Me especializo en crear experiencias digitales inmersivas.
            </Typography>
          </Grid2>
          
          {/* Contenido principal */}
          <Grid2 xs={12}>
            <Content />
            <Content />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Home;