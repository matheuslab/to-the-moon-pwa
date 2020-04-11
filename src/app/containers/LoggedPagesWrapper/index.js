import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import { homeTitle, appTitle } from './components';
import Template from '../Template';

const LoggedPagesWrapper = () => (
  <Switch>
    <Route exact path="/" component={homeTitle} />
    <Route exact path="/template" component={Template} />
    <PrivateRoute exact path="/app" component={appTitle} />
  </Switch>
);

export default LoggedPagesWrapper;
