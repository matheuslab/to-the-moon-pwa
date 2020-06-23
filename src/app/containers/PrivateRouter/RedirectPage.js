import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './auth';
import { LOGIN_PAGE } from '../../routes';

export const RedirectPage = ({ Component, routeProps }) => (
  isAuthenticated() ? (
    <Component {...routeProps} />
  ) : (
    <Redirect to={{ pathname: LOGIN_PAGE, state: { from: routeProps.location } }} />
  )
);

RedirectPage.propTypes = {
  Component: PropTypes.func.isRequired,
  routeProps: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
};

export default RedirectPage;
