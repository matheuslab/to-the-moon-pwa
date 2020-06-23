import { TOKEN } from '../PrivateRouter/constants';
import { HOME_PAGE } from '../../routes';
import submitAuthCredentials from '../../api/auth';
import history from '../../../utils/history';

export const onSubmit = (username, password) => () => submitAuthCredentials(username, password)
  .then(() => {
  // TO DO: replace this token by token received from api
    sessionStorage.setItem(TOKEN, 'someToken');
    history.push(HOME_PAGE);
  });

export default onSubmit;
