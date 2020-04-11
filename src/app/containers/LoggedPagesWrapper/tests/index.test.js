import React from 'react';
import { shallow } from 'enzyme';
import {
  Route, Switch,
} from 'react-router-dom';
import PrivateRoute from '../../PrivateRouter';
import Template from '../../Template';
import LoggedPagesWrapper from '../index';
import { homeTitle, appTitle } from '../components';

const defaultProps = {
  component: <div>bla</div>,
};

const render = (props) => shallow(<LoggedPagesWrapper {...defaultProps} {...props} />);

const renderedComponent = render();

describe('<LoggesPagesWrapper />', () => {
  it('should render Wrapper correctly', () => {
    expect(renderedComponent.find(Switch)).toHaveLength(1);
    expect(renderedComponent.find(Route)).toHaveLength(2);
    expect(renderedComponent.find(PrivateRoute)).toHaveLength(1);
  });

  describe('<Route />', () => {
    it('should render home Route with correct Props', () => {
      const routeProps = renderedComponent.find(Route).at(0).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual('/');
      expect(routeProps.component).toEqual(homeTitle);
    });

    it('should render template Route with correct Props', () => {
      const routeProps = renderedComponent.find(Route).at(1).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual('/template');
      expect(routeProps.component).toEqual(Template);
    });
  });

  describe('<PrivateRoute />', () => {
    it('should render Route with correct Props', () => {
      const routeProps = renderedComponent.find(PrivateRoute).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual('/app');
      expect(routeProps.component).toEqual(appTitle);
    });
  });
});
