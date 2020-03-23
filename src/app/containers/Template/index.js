import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { template as templateAction } from './actions';

export const Template = ({ bla, template }) => {
  console.log(bla);
  return (
    <Button onClick={template}>
      bla
    </Button>
  );
};


Template.propTypes = {
  bla: PropTypes.string.isRequired,
  template: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bla: state.templateReducer.bla,
});

const mapDispatchToProps = (dispatch) => ({
  template: () => dispatch(templateAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
