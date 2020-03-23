import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import { homeTitle, appTitle } from './components';
import Template from '../Template';

const LoggedPagesWrapper = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homeTitle} />
      <Route exact path="/template" component={Template} />
      <PrivateRoute exact path="/app" component={appTitle} />
    </Switch>
  </BrowserRouter>
);

export default LoggedPagesWrapper;
