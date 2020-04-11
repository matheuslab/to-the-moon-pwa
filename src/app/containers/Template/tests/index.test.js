import React from 'react';

import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { template as templateAction } from '../actions';
import { Template, mapDispatchToProps } from '../index';
import { changeLocale as changeLocaleAction } from '../../LanguageProvider/actions';

import messages from '../messages';

const defaultProps = {
  name: 'bla',
  template: jest.fn(),
  changeLocale: jest.fn(),
};

const render = (props) => shallow(<Template {...defaultProps} {...props} />);

const renderedComponent = render();

describe('Template', () => {
  it('should return Owner Name Button with the correct message', () => {
    expect(renderedComponent.containsMatchingElement(
      <Button onClick={defaultProps.template}>
        <Typography>
          {defaultProps.name}
        </Typography>
      </Button>,
    )).toBeTruthy();
  });

  it('should return locale change Button with the correct message', () => {
    expect(renderedComponent.containsMatchingElement(
      <Button onClick={defaultProps.changeLocale('en')}>
        <Typography>
          <FormattedMessage {...messages.changeLocaleButton} />
        </Typography>
      </Button>,
    )).toBeTruthy();
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const map = mapDispatchToProps(dispatch);

    it('template', () => {
      map.template();

      expect(dispatch).toHaveBeenCalledWith(templateAction());
    });

    it('changeLocale', () => {
      const locale = 'pt';
      map.changeLocale(locale)();

      expect(dispatch).toHaveBeenCalledWith(changeLocaleAction(locale));
    });
  });
});
