import { combineReducers } from 'redux-immutable';
/**
 * @param {Object} - key/value of reducer functions
 */

// Define the Reducers that will always be present in the application
const staticReducers = { };

export const createReducer = (asyncReducers) => combineReducers({
  ...asyncReducers,
  ...staticReducers,
});

export default createReducer;
