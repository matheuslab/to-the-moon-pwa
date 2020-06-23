import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import InputData from './InputData';
import messages from './messages';

export const Login = ({
  username, password, onChange, onSubmit,
}) => (
  <React.Fragment>
    <Box
      display="flex"
      flexDirection="column"
      my={2}
      mx={2}
      width="10%"
    >
      <InputData
        onChange={onChange}
        value={username}
        name="username"
      />
      <InputData
        onChange={onChange}
        value={password}
        name="password"
      />
      <Button onClick={onSubmit(username, password)}>
        <FormattedMessage {...messages.login} />
      </Button>
    </Box>
  </React.Fragment>
);

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
