import React from 'react';
import { Box, Container, Typography, Paper, Grid2 } from '@mui/material';

const Content = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 item xs={12}>
            <Typography variant="h2" gutterBottom>
              My Portfolio
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Welcome to my portfolio. I specialize in creating immersive digital experiences.
            </Typography>
          </Grid2>
          
          <Grid2 item xs={12}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Featured Projects
              </Typography>
              <Typography paragraph>
                Here are some of the projects I've been working on recently.
              </Typography>
              
              {/* Add your portfolio content here */}
              {Array(3).fill(0).map((_, index) => (
                <Paper key={index} elevation={2} sx={{ p: 2, mb: 2, bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <Typography variant="h6">Project {index + 1}</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                    Vivamus hendrerit arcu sed erat molestie vehicula.
                  </Typography>
                </Paper>
              ))}
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Content;