/* eslint-disable react/no-deprecated */
import React from 'react';
import { ReactReduxContext } from 'react-redux';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */

export const withReducer = (key, reducer) => (WrappedComponent) => {
  class Extended extends React.Component {
    static WrappedComponent = WrappedComponent;

    componentWillMount() {
      const { store } = this.context;

      store.injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Extended.contextType = ReactReduxContext;

  return Extended;
};

export default withReducer;
