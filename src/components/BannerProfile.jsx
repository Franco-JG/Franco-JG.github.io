import { Box, Typography, Container, Grid2 } from '@mui/material';
import Cube from "./three/Cube";

const BannerProfile = () => {
  return (
    <Box
      sx={{
        height: { xs: '70vh', md: '100vh' },
        background: 'radial-gradient(circle at top, #ffdd00, #ffffff)',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid2 container spacing={3}>
            {/* Primera fila, primera columna (75%) */}
            <Grid2 xs={12} md={9}>
              <Typography
                variant="h1"
                sx={{
                  color: '#000',
                  letterSpacing: '-0.05em',
                  textTransform: 'uppercase',
                  fontSize: { xs: '4rem', sm: '6rem', md: '9rem', lg: '15rem' },
                  lineHeight: { xs: '1', md: '0.9' },
                  mb: { xs: 2, md: 0 },
                }}
              >
                Franco
              </Typography>
            </Grid2>

            {/* Segunda columna (25%), extendida a 2 filas */}
            <Grid2 
              xs={12} 
              md={3} 
              mdRowSpan={2}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                order: { xs: 2, md: 2 },
                my: { xs: 2, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: { xs: '150px', sm: '180px', md: '200px' },
                  height: '100%',
                }}
              >
                <Cube />
              </Box>
            </Grid2>

            {/* Segunda fila, primera columna (75%) */}
            <Grid2 xs={12} md={9} sx={{ order: { xs: 3, md: 3 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 100,
                  color: '#333',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                Desarrollador junior en búsqueda de experiencias que transformen ideas en código elegante y funcional.
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerProfile;