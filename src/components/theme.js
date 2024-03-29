import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Customize your primary color
    },
    secondary: {
      main: '#f50057', // Customize your secondary color
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Customize your button text style
    },
  },
});

