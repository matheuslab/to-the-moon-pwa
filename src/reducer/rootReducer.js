import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from '../utils/history';
import { reducer as LanguageProviderReducer } from '../app/containers/LanguageProvider/reducer';

/**
 * @param {Object} - key/value of reducer functions
 */

// Define the Reducers that will always be present in the application
const staticReducers = { language: LanguageProviderReducer };

export const createReducer = (asyncReducers = {}) => combineReducers({
  router: connectRouter(history),
  ...asyncReducers,
  ...staticReducers,
});

export default createReducer;
