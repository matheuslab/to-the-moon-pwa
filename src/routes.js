/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(routeProps) => (
      isAuthenticated() ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: routeProps.location } }} />
      )
    )}
  />
);


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World (logged or not)</h1>} />
      <PrivateRoute exact path="/app" component={() => <h1>You are logged</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
