import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
} from 'react-router-dom';
import getRenderComponent from './getRenderComponent';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={getRenderComponent(Component)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
