import configureStore from '../injectReducer';

let store;

const defaultProps = {
  initialState: {
    bla: null,
  },
};

beforeEach(() => {
  jest.clearAllMocks();
  store = configureStore(defaultProps.initialState);
});

describe('injectReducer', () => {
  it('should contain an object for async reducers', () => {
    expect(typeof store.asyncReducers).toBe('object');
  });

  it('injectReducer should return a new store with new reducers', () => {
    store.injectReducer('bla', store);
    expect(store.asyncReducers).toEqual({ bla: store });
  });
});
