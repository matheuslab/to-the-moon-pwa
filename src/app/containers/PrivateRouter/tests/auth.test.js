import { isAuthenticated } from '../auth';

describe('isAuthenticated', () => {
  it('should return false if user was not authenticated ', () => {
    expect(isAuthenticated()).toBe(false);
  });

  it('should return true if user was authenticated ', () => {
    sessionStorage.setItem('token', 'bla');
    expect(isAuthenticated()).toBe(true);
  });
});
