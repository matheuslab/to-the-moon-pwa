import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import { LanguageProvider } from '../index';

import { DEFAULT_LOCALE } from '../constants';

const defaultProps = {
  messages: {
    pt: {},
    en: {},
  },
  children: <div>bla</div>,
  locale: 'pt',
};

const render = () => shallow(<LanguageProvider {...defaultProps} />);
const renderedComponent = render();

describe('LanguageProvider', () => {
  it('should render IntlProvider with correct props', () => {
    expect(renderedComponent.containsMatchingElement(
      <IntlProvider
        locale={defaultProps.locale}
        key={defaultProps.locale}
        defaultLocale={DEFAULT_LOCALE}
        messages={defaultProps.messages[defaultProps.locale]}
      >
        {React.Children.only(defaultProps.children)}
      </IntlProvider>,
    )).toBeTruthy();
  });
});
