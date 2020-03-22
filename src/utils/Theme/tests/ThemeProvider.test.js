import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../theme';
import ThemeProvider from '../ThemeProvider';

const defaultProps = {
  theme,
  children: <div>bla</div>,
};

const render = (props) => shallow(
  <ThemeProvider {...defaultProps} {...props} />,
);

const renderedComponent = render();

describe('ThemeProvider', () => {
  it('should Render ThemeProvider correctly', () => {
    expect(renderedComponent.containsMatchingElement(
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          {defaultProps.children}
        </StyledThemeProvider>
      </MuiThemeProvider>,
    )).toBeTruthy();
  });
});
