import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import InputData from '../InputData';
import messages from '../messages';

import { Login } from '../index';

const defaultProps = {
  name: 'bla',
  password: 'ble',
  onSubmit: jest.fn(),
  onChange: jest.fn(),
};

const render = (props) => shallow(<Login {...defaultProps} {...props} />);

const renderedComponent = render();

describe('Login', () => {
  describe('Box Container', () => {
    it('should render container box correctly', () => {
      const boxProps = renderedComponent.find(Box).props();
      expect(boxProps.flexDirection).toBe('column');
      expect(boxProps.my).toBe(2);
      expect(boxProps.mx).toBe(2);
      expect(boxProps.width).toBe('10%');
    });
  });

  describe('InputData', () => {
    it('should render two components', () => {
      expect(renderedComponent.find(InputData)).toHaveLength(2);
    });

    it('should render InputData correctly', () => {
      expect(renderedComponent.find(InputData).at(0).containsMatchingElement(
        <InputData
          onChange={defaultProps.onChange}
          value={defaultProps.username}
          name="username"
        />,
      )).toBeTruthy();

      expect(renderedComponent.find(InputData).at(1).containsMatchingElement(
        <InputData
          onChange={defaultProps.onChange}
          value={defaultProps.username}
          name="password"
        />,
      )).toBeTruthy();
    });
  });

  describe('LoginButton', () => {
    it('should render login button correctly', () => {
      expect(renderedComponent.find(Button).containsMatchingElement(
        <Button onClick={defaultProps.onSubmit({
          username: defaultProps.username,
          password: defaultProps.password,
        })}
        >
          <FormattedMessage {...messages.login} />
        </Button>,
      )).toBeTruthy();
    });
  });
});
