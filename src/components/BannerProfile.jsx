import { Box, Typography, Container } from '@mui/material';
import Cube from "../components/three/Cube";

const BannerProfile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'radial-gradient(circle at top, #ffdd00, #ffffff)',
        textAlign: 'center',
        padding: { xs: '20px', md: '40px' },
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '24px',
          padding: { xs: '24px', md: '48px' },
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          height: { md: '70vh' }, // Altura fija para mantener proporciones
          display: 'flex',
          flexDirection: 'column',
          // outline: '1px solid black'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Siempre en fila
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1, // Ocupa el espacio disponible
            height: '80%', // Ocupa el 80% del alto del contenedor
          }}
        >
          {/* Nombre minimalista en negro */}
          <Typography
            variant="h1"
            sx={{
              padding: 0,
              fontWeight: 100,
              height: '100%', // Ocupa todo el alto disponible
              width: 'auto', // Ancho automático
              display: 'flex',
              alignItems: 'center',
              textAlign: 'left',
              color: '#000000',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              // outline: '1px solid green'
            }}
          >
            Franco
          </Typography>

          {/* Cubo 3D */}
          <Box
            sx={{
              flexShrink: 0, // Evita que se encoja
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: '150px', md: '200px', lg: '250px' },
              width: { xs: '150px', md: '200px', lg: '250px' },
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              // outline: '1px solid blue'
            }}
          >
            <Cube wireframeColor="#ff0000" size={1.5} />
          </Box>
        </Box>

        {/* Frase descriptiva */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            color: '#333',
            textAlign: 'left', // Alineado a la derecha
            fontStyle: 'italic',
            marginLeft: 'auto', // Empuja hacia la derecha
            maxWidth: { xs: '100%', md: '60%' }, // Limita el ancho en desktop
            lineHeight: 1.6,
            // outline: '1px solid red'
          }}
        >
          Desarrollador junior en búsqueda de experiencias que transformen ideas en código elegante y funcional.
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerProfile;