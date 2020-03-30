import React from 'react';

import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import { template as templateAction } from '../actions';
import { Template, mapDispatchToProps, mapStateToProps } from '../index';

const defaultProps = {
  name: 'bla',
  template: jest.fn(),
};

const render = (props) => shallow(<Template {...defaultProps} {...props} />);

const renderedComponent = render();

describe('Template', () => {
  it('should return Button with the correct message', () => {
    expect(renderedComponent.containsMatchingElement(
      <Button onClick={defaultProps.template}>
        {defaultProps.name}
      </Button>,
    )).toBeTruthy();
  });

  describe('mapStateToProps', () => {
    const state = {
      templateReducer: {
        name: 'Robson',
      },
    };

    it('should get name from state', () => {
      expect(mapStateToProps(state)).toEqual({ name: 'Robson' });
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const map = mapDispatchToProps(dispatch);

    it('template', () => {
      map.template();

      expect(dispatch).toHaveBeenCalledWith(templateAction());
    });
  });
});
