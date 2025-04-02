import { Box, Typography, Container, Grid2 } from '@mui/material';
import Cube from "./three/Cube";

const BannerProfile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        background: 'radial-gradient(circle at top, #ffdd00, #ffffff)',
        p: 3,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: 2,
            p: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid2 container spacing={2}
            sx={{
              alignItems: 'center',
              // outline:'1px solid black', 
              flexGrow: 1,
          }}>
            {/* Nombre */}
            <Grid2 size={{xs:12, md:9}}>
              <Typography
                variant="h1"
                sx={{
                  color: '#000',
                  textTransform: 'uppercase',
                  fontSize: { xs: '3rem', md: '12rem' },
                  textAlign: 'center',
                  // outline: '1px solid red'
                }}
              >
                Franco
              </Typography>
            </Grid2>
            <Grid2 
              size={{xs:12, md:3}}
              // mdRowSpan={2}
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src="naruto.svg"
                alt="Descripción del SVG"
                sx={{
                  // outline: '1px solid blue',
                  width: { xs: '150px', sm: '180px', md: '200px' },
                  height: 'auto', // Para mantener la proporción del SVG
                  filter: 'brightness(0.8)', // Opcional: para ajustar el aspecto visual
                  transition: 'filter 0.3s ease',
                  '&:hover': {
                    filter: 'brightness(1)',
                  },
                }}
              />
            </Grid2>

            {/* Descripción */}
            <Grid2 xs={12} md={9}>
              <Typography
                variant="h5"
                sx={{
                  color: '#333',
                  fontSize: { xs: '1rem', md: '2rem' },
                  // outline: '1px solid green',
                }}
              >
                Todo hombre que conozco es superior a mí en algún sentido. En ese sentido, aprendo de él.
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerProfile;