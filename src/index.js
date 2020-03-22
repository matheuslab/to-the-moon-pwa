import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './app/containers/App/index';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  MOUNT_NODE,
);
