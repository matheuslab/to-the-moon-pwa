import { createSelector } from 'reselect';
import { key } from './constants';

const selectSlice = (state) => state.getIn([key]);
const selectLocale = (state) => selectSlice(state).getIn(['locale']);

export const makeSelectLocale = () => createSelector(
  selectLocale,
  (locale) => locale,
);
