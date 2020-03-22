import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from './utils/Theme/ThemeProvider';
import { theme } from './utils/Theme/theme';
import App from './app/containers/App/index';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <IntlProvider locale="en">
    <ThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </ThemeProvider>
  </IntlProvider>,
  MOUNT_NODE,
);
