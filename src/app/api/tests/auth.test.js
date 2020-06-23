import submitAuthCredentials from '../auth';

const axios = require('axios');

jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
  process.env = Object.assign(process.env, { REACT_APP_AUTH_ENDPOINT: 'mockedEndpoint' });
});

describe('submitAuthCredentials', () => {
  it('should call a post request', () => {
    submitAuthCredentials('bla', 'ble');
    expect(axios.post).toHaveBeenCalled();
  });

  it('should call a post request with correct props', () => {
    submitAuthCredentials('bla', 'ble');
    expect(axios.post).toHaveBeenCalledWith('mockedEndpoint', {
      username: 'bla',
      password: 'ble',
    });
  });
});
