import { CHANGE_LOCALE } from './constants';

export const changeLocale = (languageLocale) => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});
