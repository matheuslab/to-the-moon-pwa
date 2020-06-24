import axios from 'axios';

export const submitAuthCredentials = (username, password) => {
  const bodyRequest = {
    username,
    password,
  };
  return axios.post(process.env.REACT_APP_AUTH_ENDPOINT, bodyRequest);
};

export default submitAuthCredentials;
