import { CHANGE_LOCALE } from '../constants';
import { changeLocale as changeLocaleAction } from '../actions';

describe('changeLocaleAction', () => {
  it('should create the right action', () => {
    const locale = 'en';
    expect(changeLocaleAction(locale)).toEqual({
      type: CHANGE_LOCALE,
      locale,
    });
  });
});
