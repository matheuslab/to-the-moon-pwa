import { fromJS } from 'immutable';
import {
  makeSelectName,
} from '../selectors';

import { key } from '../constants';


describe('selectors', () => {
  const mockState = fromJS({
    [key]: {
      name: 'matheus',
    },
  });


  it('makeSelectName', () => {
    const selector = makeSelectName();

    expect(selector(mockState)).toBe('matheus');
  });
});
