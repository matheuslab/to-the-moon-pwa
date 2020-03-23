import { combineReducers } from 'redux';
import createReducer from '../rootReducer';

jest.mock('redux');

describe('rootReducer', () => {
  it('should call combineReducers with asyncReducers passed as prop', () => {
    const reducerList = {
      reducers: {},
    };
    createReducer(reducerList);
    expect(combineReducers).toHaveBeenCalledWith({
      ...reducerList,
    });
  });
});
