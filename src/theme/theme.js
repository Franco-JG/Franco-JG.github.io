import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
const theme = createTheme({
    cssVariables: true,
    palette:{
        mode: 'dark',
        primary: {
            main: '#f5f5f5',
        },
        secondary: {
            main: '#bdbdbd',
        },
        error: {
            main: '#212121',
        },
    }
    
});

export default theme