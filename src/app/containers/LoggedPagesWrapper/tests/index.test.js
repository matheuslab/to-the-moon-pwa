import React from 'react';
import { shallow } from 'enzyme';
import {
  Switch,
} from 'react-router-dom';
import PrivateRoute from '../../PrivateRouter';
import Template from '../../Template/Loadable';
import LoggedPagesWrapper from '../index';

const defaultProps = {
  component: <div>bla</div>,
};

const render = (props) => shallow(<LoggedPagesWrapper {...defaultProps} {...props} />);

const renderedComponent = render();

describe('<LoggedPagesWrapper />', () => {
  it('should render Components correctly', () => {
    expect(renderedComponent.find(Switch)).toHaveLength(1);
    expect(renderedComponent.find(PrivateRoute)).toHaveLength(1);
  });

  describe('<PrivateRoute />', () => {
    it('should render home PrivateRoute with correct Props', () => {
      const routeProps = renderedComponent.find(PrivateRoute).at(0).props();
      expect(routeProps.exact).toEqual(true);
      expect(routeProps.path).toEqual('/');
      expect(routeProps.component).toEqual(Template);
    });
  });
});
