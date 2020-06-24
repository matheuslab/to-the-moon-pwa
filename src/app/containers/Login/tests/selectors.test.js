import { fromJS } from 'immutable';
import {
  makeSelectUser,
  makeSelectPassword,
} from '../selectors';

import { key } from '../constants';


describe('selectors', () => {
  const mockState = fromJS({
    [key]: {
      username: 'matheus',
      password: 'martins',
    },
  });


  it('makeSelectUser', () => {
    const selector = makeSelectUser();

    expect(selector(mockState)).toBe('matheus');
  });

  it('makeSelectPassword', () => {
    const selector = makeSelectPassword();

    expect(selector(mockState)).toBe('martins');
  });
});
