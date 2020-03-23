import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { template as templateAction } from './actions';
import withReducer from '../../../reducer/withReducer';
import templateReducer from './reducer';

export const Template = ({ name, template }) => (
  <Button onClick={template}>
    {name}
  </Button>
);

Template.propTypes = {
  name: PropTypes.string.isRequired,
  template: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.templateReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  template: () => dispatch(templateAction()),
});

export default compose(
  withReducer('templateReducer', templateReducer),
  connect(mapStateToProps, mapDispatchToProps),
)(Template);
