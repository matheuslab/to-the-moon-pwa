import React from 'react';
import { shallow } from 'enzyme';
import {
  Route,
} from 'react-router-dom';

import PrivateRoute from '../index';
import getRenderComponent from '../getRenderComponent';

const defaultProps = {
  Component: <div>bla</div>,
  bla: 'ble',
};

jest.mock('../getRenderComponent');

const render = (props) => shallow(<PrivateRoute {...defaultProps} {...props} />);
const renderedComponent = render();

describe('<App />', () => {
  it('should return Render component', () => {
    expect(render().find(Route)).toHaveLength(1);
  });

  describe('<Route />', () => {
    it('should render Route with correct props', () => {
      const routeProps = renderedComponent.find(Route).props();
      expect(routeProps.bla).toEqual('ble');
      expect(routeProps.render).toEqual(getRenderComponent(defaultProps.Component));
    });
  });
});
