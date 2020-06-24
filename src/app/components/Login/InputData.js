import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export const InputData = ({ name, value, onChange }) => (
  <TextField
    name={name}
    type="text"
    value={value}
    onChange={onChange}
  />
);

InputData.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputData;
