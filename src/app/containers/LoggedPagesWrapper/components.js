import React from 'react';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import { FormattedMessage } from 'react-intl';
import Typography from './Typography';

import messages from './messages';

export const homeTitle = () => (
  <React.Fragment>
    <BrightnessAutoIcon color="primary" />
    <Typography textDecoration="underline">
      <FormattedMessage {...messages.title} />
    </Typography>
  </React.Fragment>
);

export const appTitle = () => (
  <Typography>
    <FormattedMessage {...messages.loggedPageTitle} />
  </Typography>
);
