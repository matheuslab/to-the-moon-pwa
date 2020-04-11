import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE } from './constants';

import { makeSelectLocale } from './selectors';
import { changeLocale as changeLocaleAction } from './actions';

export const LanguageProvider = ({ locale, children, messages }) => (
  <IntlProvider
    locale={locale}
    key={locale}
    defaultLocale={DEFAULT_LOCALE}
    messages={messages[locale]}
  >
    {React.Children.only(children)}
  </IntlProvider>
);

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

export const mapDispatchToProps = (dispatch) => ({
  changeLocale: (languageLocale) => dispatch(changeLocaleAction(languageLocale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageProvider);
