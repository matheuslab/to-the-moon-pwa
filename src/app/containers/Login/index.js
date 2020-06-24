import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { key } from './constants';

import { onChange as onChangeAction } from './actions';
import withReducer from '../../../reducer/withReducer';
import { makeSelectUser, makeSelectPassword } from './selectors';
import Login from '../../components/Login';
import reducer from './reducer';
import { onSubmit } from './onSubmit';

export const LoginPage = ({ username, password, onChange }) => (
  <Login
    username={username}
    password={password}
    onChange={onChange}
    onSubmit={onSubmit}
  />
);

LoginPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  username: makeSelectUser(),
  password: makeSelectPassword(),
});

export const mapDispatchToProps = (dispatch) => ({
  onChange: ({ target }) => dispatch(onChangeAction(target)),
});

export default compose(
  withReducer(key, reducer),
  connect(mapStateToProps, mapDispatchToProps),
)(LoginPage);
