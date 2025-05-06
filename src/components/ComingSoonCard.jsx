import { Typography, Card, CardContent, Box, Stack } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const ComingSoonCard = () => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'rgba(30, 30, 60, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
        }
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          bgcolor: '#ff5cb8',
          color: 'white',
          px: 1.5,
          py: 0.5,
          borderRadius: 5,
          fontSize: '0.7rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          zIndex: 1,
        }}
      >
        Próximamente
      </Box>
      
      <Box
        sx={{
          height: '180px',
          background: 'linear-gradient(135deg, rgba(0,238,255,0.2) 0%, rgba(255,92,184,0.2) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      >
        <ConstructionIcon sx={{ fontSize: 60, color: 'rgba(255,255,255,0.3)' }} />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#0ef' }}>
          Próximo Proyecto
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: '#f5f5f5', textAlign: 'center' }}>
          Estoy trabajando en algo increíble. ¡Vuelve pronto para descubrirlo!
        </Typography>
        
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ my: 2, gap: 1, justifyContent: 'center' }}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '30px',
              px: 2,
              py: 1,
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.8rem',
              textAlign: 'center',
              width: '80%'
            }}
          >
            En desarrollo...
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ComingSoonCard;