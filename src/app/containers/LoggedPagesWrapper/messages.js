import { defineMessages } from 'react-intl';

export const scope = 'src.app.containers.LoggedPagesWrapper';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Hello World (logged or not)',
  },
  loggedPageTitle: {
    id: `${scope}.loggedPageTitle`,
    defaultMessage: 'You are logged',
  },
});
