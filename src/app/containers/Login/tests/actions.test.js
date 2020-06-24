import { ON_CHANGE } from '../constants';
import { onChange } from '../actions';

describe('template actions', () => {
  it('should create the right action', () => {
    const target = {
      name: 'cartola',
      value: 'infinity',
    };
    expect(onChange(target)).toEqual({
      type: ON_CHANGE,
      target: {
        name: target.name,
        value: target.value,
      },
    });
  });
});
