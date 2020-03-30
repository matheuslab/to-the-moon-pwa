import { fromJS } from 'immutable';
import {
  makeSelectName,
} from '../selectors';


describe('selectors', () => {
  const mockState = fromJS({
    name: 'matheus',
  });


  it('makeSelectName', () => {
    const selector = makeSelectName();

    expect(selector(mockState)).toBe('matheus');
  });
});
