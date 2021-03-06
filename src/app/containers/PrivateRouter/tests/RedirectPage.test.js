import React from 'react';
import { shallow } from 'enzyme';
import {
  Redirect,
} from 'react-router-dom';
import { LOGIN_PAGE } from '../../../routes';

import { RedirectPage } from '../RedirectPage';

jest.mock('../auth');

const isAuthenticatedFunction = require('../auth').isAuthenticated;

beforeEach(() => {
  jest.clearAllMocks();
});

const defaultProps = {
  Component: <Redirect />,
  routeProps: {
    location: 'bla',
  },
};

const render = () => shallow(<RedirectPage {...defaultProps} />);

describe('<RedirectPage />', () => {
  it('should render component received as prop if user is authenticated', () => {
    isAuthenticatedFunction.mockReturnValue(true);
    expect(render().containsMatchingElement(
      <defaultProps.Component {...defaultProps.routeProps} />,
    )).toBeTruthy();
  });

  it('should redirect if user is not authenticated', () => {
    isAuthenticatedFunction.mockReturnValue(false);
    expect(render().containsMatchingElement(
      <Redirect to={{ pathname: LOGIN_PAGE, state: { from: defaultProps.routeProps.location } }} />,
    )).toBeTruthy();
  });
});
