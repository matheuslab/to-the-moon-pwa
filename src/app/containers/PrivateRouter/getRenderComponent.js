import React from 'react';
import RedirectPage from './RedirectPage';

export const getRenderComponent = (Component) => (routeProps) => (
  <RedirectPage Component={Component} routeProps={routeProps} />
);

export default getRenderComponent;
