import reducer, { initialState } from '../reducer';
import { CHANGE_LOCALE } from '../constants';

describe('reducer', () => {
  it('should return initalState if state isnt defined', () => {
    expect(reducer(undefined, { type: 'IhavegotthemoveslikeJagger' }))
      .toBe(initialState);
  });

  describe('CHANGE_LOCALE action dispatch', () => {
    it('should change to locate passed as prop '
    + 'if action type is equal to CHANGE_LOCALE', () => {
      const newLocale = 'en';

      expect(reducer(initialState, { type: CHANGE_LOCALE, locale: newLocale })
        .getIn(['locale'])).toEqual(newLocale);
    });

    it('should return only state if action type is not CHANGE_LOCALE', () => {
      const state = {
        corona: true,
      };
      expect(reducer(state, { type: 'PAVÃO MISTERIOSO' })).toEqual({
        ...state,
      });
    });
  });
});
