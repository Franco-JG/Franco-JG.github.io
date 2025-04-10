import { createTheme } from '@mui/material';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
        background: {
            default: '#000',
        },
        primary: {
            main: '#f5f5f5',
        },
        secondary: {
            main: '#bdbdbd',
        },
        error: {
            main: '#212121',
        },
    },
});

export default theme;
