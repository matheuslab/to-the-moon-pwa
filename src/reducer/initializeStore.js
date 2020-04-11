import { createStore, compose, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import createReducer from './rootReducer';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */

const initializeStore = () => {
  const middlewares = [thunk, reduxPackMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const initialState = Map({});
  const store = createStore(
    createReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;
