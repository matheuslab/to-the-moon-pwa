import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import LoggedPagesWrapper from '../LoggedPagesWrapper';
import LoginPage from '../Login';

import { HOME_PAGE, LOGIN_PAGE } from '../../routes';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={HOME_PAGE} component={LoggedPagesWrapper} />
    <Route exact path={LOGIN_PAGE} component={LoginPage} />
  </Switch>
);

export default Routes;
