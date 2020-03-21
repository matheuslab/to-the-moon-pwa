import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
} from 'react-router-dom';
import getRenderComponent from './getRenderComponent';

import RedirectPage from './RedirectPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={getRenderComponent(Component)}
  />
);

RedirectPage.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default PrivateRoute;
