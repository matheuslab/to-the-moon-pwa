import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import { template as templateAction } from './actions';
import withReducer from '../../../reducer/withReducer';
import { makeSelectName } from './selectors';
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

export const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
});

export const mapDispatchToProps = (dispatch) => ({
  template: () => dispatch(templateAction()),
});

export default compose(
  withReducer('templateReducer', templateReducer),
  connect(mapStateToProps, mapDispatchToProps),
)(Template);
