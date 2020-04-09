import { createSelector } from 'reselect';
import { key } from './constants';

const selectSlice = (state) => state.getIn([key]);

const selectTemplateName = (state) => selectSlice(state).getIn(['name']);

export const makeSelectName = () => createSelector(
  selectTemplateName,
  (name) => name,
);
