/**
 * Test store addons
 */
import initializeStore from '../initializeStore';

describe('initializeStore', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    store = initializeStore();
    store.replaceReducer = jest.fn();
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });

    it('injectReducer should return a new store with new reducers', () => {
      store.injectReducer('bla', store);
      expect(store.asyncReducers).toEqual({ bla: store });
    });
  });
});
