import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE } from './constants';

import { makeSelectLocale } from './selectors';

export const LanguageProvider = ({ locale, messages, children }) => {
  const mergedMessages = { ...messages[DEFAULT_LOCALE], ...messages[locale] };

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      defaultLocale={DEFAULT_LOCALE}
      messages={mergedMessages}
    >
      {React.Children.only(children)}
    </IntlProvider>

  );
};


LanguageProvider.propTypes = {
  messages: PropTypes.shape({
    pt: PropTypes.object,
    en: PropTypes.object,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});


export default connect(
  mapStateToProps,
  null,
)(LanguageProvider);
