import { ON_CHANGE } from './constants';

export const onChange = ({ name, value }) => ({
  type: ON_CHANGE,
  target: {
    name,
    value,
  },
});
