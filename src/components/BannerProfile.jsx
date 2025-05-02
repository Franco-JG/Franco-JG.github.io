import { Box, Typography, Container, Stack, Button } from '@mui/material';

import Typewriter from 'typewriter-effect';
import AboutMeObject from './AboutMeObject';
import Presentation from './Presentation';

const BannerProfile = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 8, md: 8 },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        mx: 'auto',
        maxWidth: '1600px',
      }}>
        <Presentation/>
        <AboutMeObject />
      </Box>
    </Container>
  );
};

export default BannerProfile;