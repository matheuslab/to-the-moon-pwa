import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import Template from '../Template/Loadable';

export const LoggedPagesWrapper = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Template} />
  </Switch>
);

export default LoggedPagesWrapper;
