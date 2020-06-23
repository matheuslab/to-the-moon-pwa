import { TOKEN } from './constants';

export const isAuthenticated = () => {
  if (sessionStorage.getItem(TOKEN) !== null) {
    return true;
  }
  return false;
};

export default isAuthenticated;
