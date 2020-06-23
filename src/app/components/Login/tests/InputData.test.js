import React from 'react';
import TextField from '@material-ui/core/TextField';
import { shallow } from 'enzyme';
import InputData from '../InputData';

const defaultProps = {
  name: 'bla',
  value: 'ble',
  onChange: jest.fn(),
};

const render = (props) => shallow(<InputData {...defaultProps} {...props} />);

const renderedComponent = render();

describe('InputData', () => {
  it('should return TextField component, with correct props', () => {
    expect(renderedComponent.containsMatchingElement(
      <TextField
        name={defaultProps.name}
        type="text"
        value={defaultProps.value}
        onChange={defaultProps.onChange}
      />,
    )).toBeTruthy();
  });
});
