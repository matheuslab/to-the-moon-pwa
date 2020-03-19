/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  Route,
} from 'react-router-dom';

import { RedirectPage } from './RedirectPage';

const PrivateRoute = ({ Component, ...rest }) => (
  <Route
    {...rest}
    render={<RedirectPage Component={Component} />}
  />
);

export default PrivateRoute;
