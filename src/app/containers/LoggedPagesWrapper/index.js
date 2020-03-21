import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import { homeTitle, appTitle } from './components';

const LoggedPagesWrapper = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homeTitle} />
      <PrivateRoute exact path="/app" component={appTitle} />
    </Switch>
  </BrowserRouter>
);

export default LoggedPagesWrapper;
