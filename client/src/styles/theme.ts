import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#989898',
    },
    secondary: {
      main: '#cfe9ff',
    },
    error: {
      main:'#ff5c61',
    },
  },
});

export default theme;