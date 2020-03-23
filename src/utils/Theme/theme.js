import { createMuiTheme } from '@material-ui/core/styles';
import * as Colors from './colors';

export const theme = {
  palette: {
    primary: {
      main: Colors.blue500,
      light: Colors.blue100,
      dark: Colors.blue700,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.green500,
      light: Colors.green300,
      dark: Colors.green700,
      contrastText: Colors.white,
    },
    error: {
      main: Colors.red800,
      light: Colors.red50,
      contrastText: Colors.white,
    },
    success: {
      main: Colors.green900,
      light: Colors.green100,
      contrastText: Colors.white,
    },
    attention: {
      main: Colors.yellow500,
      light: Colors.yellow100,
      contrastText: Colors.black,
    },
    grey: {
      highEmphasis: Colors.grey800,
      mediumEmphasis: Colors.grey600,
      disabled: Colors.grey400,
      lighter: Colors.grey300,
      base: Colors.grey200,
      background: Colors.grey50,
    },
    special: {
      main: '#0a9db0',
      light: '#DAF1F3',
      dark: '#006e81',
      contrastText: Colors.white,
    },
    specialSecondary: {
      main: '#9362b7',
      light: '#c591ea',
      dark: '#633687',
      contrastText: Colors.white,
    },
    common: {
      black: Colors.black,
      white: Colors.white,
    },
    contrastThreshold: 2.5,
  },
  shape: {
    borderRadius: 8,
  },
};

export default createMuiTheme(theme);
