import {
  HOME_PAGE,
  getHomePage,
} from '../index';

describe('Route helper functions', () => {
  test.each`
      fn                                  | path
      ${getHomePage}                      | ${`${HOME_PAGE}`}
    `('$fn.name should return the correct route path (e.g. $path)', ({ fn, path }) => {
  expect(fn()).toBe(path);
});
});
