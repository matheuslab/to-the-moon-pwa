import { isAuthenticated } from '../auth';

describe('isAuthenticated', () => {
  it('should return if user was authenticated ', () => {
    expect(isAuthenticated()).toBe(true);
  });
});
