import React from 'react';
import { shallow } from 'enzyme';
import { identity } from 'lodash';
import { Provider } from 'react-redux';
import { withReducer } from '../withReducer';
import initializeStore from '../initializeStore';

const Component = jest.fn();

let store;
let ComponentWithReducer;
let props;
let renderedComponent;

beforeEach(() => {
  store = initializeStore();
  ComponentWithReducer = withReducer('test', identity)(Component);
  props = { testProp: 'test' };
  renderedComponent = shallow(
    <Provider store={store}>
      <ComponentWithReducer {...props} />
    </Provider>, {
      context: { store },
    },
  );
});

describe('withReducer', () => {
  it('should propagate props', () => {
    expect(renderedComponent.dive().props()).toEqual(props);
    // TODO:
    // how test render() return here
    // how to test that store.injectReducer(key, reducer) was called here
  });
});
