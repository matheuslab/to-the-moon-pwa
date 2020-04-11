import { fromJS } from 'immutable';
import {
  makeSelectLocale,
} from '../selectors';

import { key } from '../constants';


describe('selectors', () => {
  const mockState = fromJS({
    [key]: {
      locale: 'ptBR',
    },
  });


  it('makeSelectLocale', () => {
    const selector = makeSelectLocale();

    expect(selector(mockState)).toBe('ptBR');
  });
});
