
import { TEMPLATE } from '../constants';
import { template } from '../actions';

describe('template actions', () => {
  it('should create the right action', () => {
    expect(template()).toEqual({
      type: TEMPLATE,
    });
  });
});
