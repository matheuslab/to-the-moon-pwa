import { createStore } from 'redux';
import createReducer from './rootReducer';
// Define the Reducers that will always be present in the application
const staticReducers = {};

// Configure the store
export const configureStore = (initialState) => {
  const store = createStore(createReducer(), initialState);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer({ ...store.asyncReducers, ...staticReducers }));
  };

  // Return the modified store
  return store;
};

export default configureStore;
