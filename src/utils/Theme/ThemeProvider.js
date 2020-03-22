import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemePropType } from './ThemePropType';

const ThemeProvider = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  theme: ThemePropType.isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
