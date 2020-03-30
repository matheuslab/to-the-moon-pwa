import { createSelector } from 'reselect';

const selectTemplateName = (state) => {
  console.log('state is equal to ', state);

  return (
    state.getIn(['name'])
  );
};

export const makeSelectName = () => createSelector(
  selectTemplateName,
  (name) => name,
);
