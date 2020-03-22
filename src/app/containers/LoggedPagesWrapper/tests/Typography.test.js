import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import Typography from '../Typography';

const defaultProps = {
  textDecoration: 'underline',
};

describe('<Typography />', () => {
  const render = (props) => mount(
    <Typography {...defaultProps} {...props}>bla</Typography>,
  );

  describe('underline prop', () => {
    it('should have text decoration equal to decoration passed as prop, if it is valid', () => {
      expect(render({ textDecoration: 'underline' })).toHaveStyleRule('text-decoration', 'underline');
    });
    it('should have initial text decoration, if textDecoration is invalid', () => {
      expect(render({ textDecoration: null })).toHaveStyleRule('text-decoration', 'initial');
    });
  });
});
