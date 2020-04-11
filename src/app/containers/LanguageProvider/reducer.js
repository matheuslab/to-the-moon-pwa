import { fromJS } from 'immutable';

import { CHANGE_LOCALE, DEFAULT_LOCALE } from './constants';

export const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.setIn(['locale'], action.locale);
    default:
      return state;
  }
};

export default reducer;
