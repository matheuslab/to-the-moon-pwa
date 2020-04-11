import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { template as templateAction } from './actions';
import withReducer from '../../../reducer/withReducer';
import { makeSelectName } from './selectors';
import { changeLocale as changeLocaleAction } from '../LanguageProvider/actions';
import reducer from './reducer';
import messages from './messages';

export const Template = ({ name, template, changeLocale }) => (
  <React.Fragment>
    <Button onClick={template}>
      <Typography>
        {name}
      </Typography>
    </Button>

    <Button onClick={changeLocale('en')}>
      <Typography>
        <FormattedMessage {...messages.changeLocaleButton} />
      </Typography>
    </Button>
  </React.Fragment>
);

Template.propTypes = {
  name: PropTypes.string.isRequired,
  template: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
});

export const mapDispatchToProps = (dispatch) => ({
  template: () => dispatch(templateAction()),
  changeLocale: (locale) => () => dispatch(changeLocaleAction(locale)),
});

export default compose(
  withReducer('templateReducer', reducer),
  connect(mapStateToProps, mapDispatchToProps),
)(Template);
