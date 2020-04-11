import translationMessages from '../translationMessages';
import { en } from '../en';
import { pt } from '../pt';

describe('translationMessages', () => {
  it('should return an object with all supported languages inside', () => {
    expect(translationMessages).toEqual({
      en,
      pt,
    });
  });
});
