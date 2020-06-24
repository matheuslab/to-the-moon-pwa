import { createSelector } from 'reselect';
import { key } from './constants';

const selectSlice = (state) => state.getIn([key]);

const selectTemplateUser = (state) => selectSlice(state).getIn(['username']);
const selectTemplatePassword = (state) => selectSlice(state).getIn(['password']);

export const makeSelectUser = () => createSelector(
  selectTemplateUser,
  (username) => username,
);

export const makeSelectPassword = () => createSelector(
  selectTemplatePassword,
  (password) => password,
);
