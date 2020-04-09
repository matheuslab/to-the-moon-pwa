import { fromJS } from 'immutable';
import { TEMPLATE } from './constants';

export const initialState = fromJS({
  name: 'Matheus',
});

export const reducer = (state = initialState, action) => {
  if (action.type === TEMPLATE) {
    return state.setIn(['name'], 'Matheus Martins');
  }

  return state;
};

export default reducer;
