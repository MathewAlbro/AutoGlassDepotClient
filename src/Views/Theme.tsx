import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#056BA9',
        // light: '#659CBC',
      },
      secondary: {
        main: '#659CBC',
        contrastText: '#CACED0',
      },
    },
    typography: {
      fontFamily: 'Helvetica, serif',
      body2: {
        fontFamily: 'Jazz LET, fantasy',
        fontSize: '1',
      }
    },
    shape: {
      borderRadius: 5,
    },
    spacing: 5,
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          padding: '30px',
        },
        fullWidth: {
          maxWidth: '75px'
        }
      }
    },
    props: {
      MuiButton: {
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
      MuiCheckbox: {
        disableRipple: true,
      },
      MuiPaper: {
        elevation: 6
      }
    }

  });

  export default theme;

  