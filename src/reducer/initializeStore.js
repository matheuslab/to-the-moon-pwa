import { createStore, compose } from 'redux';
import createReducer from './rootReducer';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */

const initializeStore = () => {
  const store = createStore(createReducer(), composeEnhancers());

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;
