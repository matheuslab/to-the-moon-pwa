import React from 'react';
import { shallow } from 'enzyme';
import {
  Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../../PrivateRouter';
import LoginPage from '../../Login';
import Routes from '../Routes';
import { HOME_PAGE, LOGIN_PAGE } from '../../../routes';
import LoggedPagesWrapper from '../../LoggedPagesWrapper';

const defaultProps = {
  component: <div>bla</div>,
};

const render = (props) => shallow(<Routes {...defaultProps} {...props} />);

const renderedComponent = render();

describe('<Routes />', () => {
  it('should render Components correctly', () => {
    expect(renderedComponent.find(Switch)).toHaveLength(1);
    expect(renderedComponent.find(PrivateRoute)).toHaveLength(1);
    expect(renderedComponent.find(Route)).toHaveLength(1);
  });

  describe('<PrivateRoute />', () => {
    it('should render LoggedPagesWrapper with correct Props', () => {
      const routeProps = renderedComponent.find(PrivateRoute).at(0).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual(HOME_PAGE);
      expect(routeProps.component).toEqual(LoggedPagesWrapper);
    });

    it('should render login Route with correct Props', () => {
      const routeProps = renderedComponent.find(Route).at(0).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual(LOGIN_PAGE);
      expect(routeProps.component).toEqual(LoginPage);
    });
  });
});
