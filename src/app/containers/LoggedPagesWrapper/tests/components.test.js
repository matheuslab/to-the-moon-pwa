import React from 'react';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import { FormattedMessage } from 'react-intl';
import Typography from '../Typography';
import { homeTitle, appTitle } from '../components';

import messages from '../messages';

describe('homeTitle', () => {
  it('should return homeTitle correctly', () => {
    expect(homeTitle()).toEqual(
      <React.Fragment>
        <BrightnessAutoIcon color="primary" />
        <Typography textDecoration="underline">
          <FormattedMessage {...messages.title} />
        </Typography>
      </React.Fragment>,
    );
  });
});

describe('appTitle', () => {
  it('should return appTitle correctly', () => {
    expect(appTitle()).toEqual(
      <Typography>
        <FormattedMessage {...messages.loggedPageTitle} />
      </Typography>,
    );
  });
});
