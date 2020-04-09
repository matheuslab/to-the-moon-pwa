import { combineReducers } from 'redux-immutable';
import createReducer from '../rootReducer';

jest.mock('redux-immutable');

describe('rootReducer', () => {
  it('should call combineReducers with asyncReducers passed as prop', () => {
    const asyncReducers = {
      reducers: {},
    };
    const staticReducers = {};

    createReducer(asyncReducers);

    expect(combineReducers).toHaveBeenCalledWith({
      ...asyncReducers,
      ...staticReducers,
    });
  });
});
