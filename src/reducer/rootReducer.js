import { combineReducers } from 'redux';

/**
 * @param {Object} - key/value of reducer functions
 */

const createReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
});

export default createReducer;
