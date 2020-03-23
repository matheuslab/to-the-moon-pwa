import React from 'react';
import { shallow } from 'enzyme';
import withReducer from '../withReducer';
import { templateReducer as reducer } from '../../app/containers/Template/reducer';
import initializeStore from '../initializeStore';

const Component = () => null;

let store;
let ComponentWithReducer;

beforeEach(() => {
  store = initializeStore();
  ComponentWithReducer = withReducer('test', reducer)(Component);
});

xdescribe('withReducer', () => {
  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = shallow(<ComponentWithReducer {...props} />, {
      context: { store },
    });
    expect(store).toBe('test');
    expect(renderedComponent.prop('testProp')).toBe('test');
  });
});
