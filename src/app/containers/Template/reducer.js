import { TEMPLATE } from './constants';

export const initialState = {
  name: 'Matheus',
};

export const templateReducer = (state = initialState, action) => {
  if (action.type === TEMPLATE) {
    return { ...state, name: 'Matheus Martins' };
  }

  return state;
};

export default templateReducer;
