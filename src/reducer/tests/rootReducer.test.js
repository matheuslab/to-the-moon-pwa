import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import createReducer from '../rootReducer';
import history from '../../utils/history';

jest.mock('redux-immutable');
jest.mock('connected-react-router/immutable');

describe('rootReducer', () => {
  it('should call combineReducers with asyncReducers passed as prop', () => {
    const asyncReducers = {
      reducers: {},
    };
    const staticReducers = {};

    createReducer(asyncReducers);

    expect(combineReducers).toHaveBeenCalledWith({
      route: connectRouter(history),
      ...asyncReducers,
      ...staticReducers,
    });
  });
});
