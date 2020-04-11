import React from 'react';
import ReactDOM from 'react-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from './utils/history';
import ThemeProvider from './utils/Theme/ThemeProvider';
import { theme } from './utils/Theme/theme';
import App from './app/containers/App/index';
import initializeStore from './reducer/initializeStore';
import LanguageProvider from './app/containers/LanguageProvider';
import translationMessages from './translationMessages';

const initialState = {};
const store = initializeStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(

  <ThemeProvider theme={createMuiTheme(theme)}>
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>
  </ThemeProvider>,
  MOUNT_NODE,
);
