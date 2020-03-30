import { combineReducers } from 'redux';

/**
 * @param {Object} - key/value of reducer functions
 */

export const createReducer = (reducerList) => combineReducers({
  ...reducerList,
});

export default createReducer;
