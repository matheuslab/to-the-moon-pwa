import { fromJS } from 'immutable';
import { ON_CHANGE } from './constants';

export const initialState = fromJS({
  username: '',
  password: '',
});

export const handleOnChangeAction = (state, action) => state
  .setIn([action.target.name], action.target.value);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return handleOnChangeAction(state, action);
    default:
      return state;
  }
};

export default reducer;
