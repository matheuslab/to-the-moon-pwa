/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './auth';

export const RedirectPage = ({ Component, routeProps }) => (
  isAuthenticated() ? (
    <Component {...routeProps} />
  ) : (
    <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
  )
);

export default RedirectPage;
