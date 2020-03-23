import { createStore, combineReducers } from 'redux';

// Define the Reducers that will always be present in the application
const staticReducers = {};

const createReducer = (asyncReducers) => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

// Configure the store
export const configureStore = (initialState) => {
  const store = createStore(createReducer(), initialState);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
};

export default configureStore;
