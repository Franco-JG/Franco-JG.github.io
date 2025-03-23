import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Franco's Portfolio
        </Typography>
        <Box>
          <Button
            component={Link}
            to="/"
            sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;