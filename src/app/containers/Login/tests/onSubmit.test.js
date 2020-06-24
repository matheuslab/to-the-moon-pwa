import onSubmit from '../onSubmit';
import { TOKEN } from '../../PrivateRouter/constants';
import { HOME_PAGE } from '../../../routes';
import submitAuthCredentials from '../../../api/auth';
import history from '../../../../utils/history';

jest.mock('../../../api/auth');
jest.mock('../../../../utils/history');

beforeEach(() => {
  jest.clearAllMocks();
  submitAuthCredentials.mockReturnValue(Promise.resolve((true)));
});

describe('reducer', () => {
  it('should set a string on token item, in session storage', () => {
    onSubmit('bla', 'ble')().then(() => {
      expect(sessionStorage.getItem(TOKEN)).toBe('someToken');
    });
  });

  it('should call submitAuthCredentials with correct params', () => {
    onSubmit('bla', 'ble')();
    expect(submitAuthCredentials).toHaveBeenCalledWith('bla', 'ble');
  });

  it('should redirect to Home page, on success', () => {
    onSubmit('bla', 'ble')().then(() => {
      expect(history.push).toHaveBeenCalledWith(HOME_PAGE);
    });
  });
});
