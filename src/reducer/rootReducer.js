import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../utils/history';
/**
 * @param {Object} - key/value of reducer functions
 */

// Define the Reducers that will always be present in the application
const staticReducers = { };

export const createReducer = (asyncReducers = {}) => combineReducers({
  router: connectRouter(history),
  ...asyncReducers,
  ...staticReducers,
});

export default createReducer;
