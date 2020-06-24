import React from 'react';

import { shallow } from 'enzyme';
import Login from '../../../components/Login';
import { onChange as onChangeAction } from '../actions';
import onSubmit from '../onSubmit';

import { LoginPage, mapDispatchToProps } from '../index';

const defaultProps = {
  name: 'bla',
  value: 'ble',
  onChange: jest.fn(),
};

const render = (props) => shallow(<LoginPage {...defaultProps} {...props} />);

const renderedComponent = render();

describe('LoginPage', () => {
  it('should return a Login component', () => {
    expect(renderedComponent.containsMatchingElement(
      <Login
        username={defaultProps.username}
        password={defaultProps.password}
        onChange={defaultProps.onChange}
        onSubmit={onSubmit}
      />,
    )).toBeTruthy();
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const map = mapDispatchToProps(dispatch);
    const target = {
      name: 'sonic',
      value: 'sanic',
    };

    it('onChange', () => {
      map.onChange({ target });

      expect(dispatch).toHaveBeenCalledWith(onChangeAction(target));
    });
  });
});
