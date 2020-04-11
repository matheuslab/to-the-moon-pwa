import { defineMessages } from 'react-intl';

export const scope = 'src.app.containers.LoggedPagesWrapper';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Olá Mundo (logado ou não)',
  },
  loggedPageTitle: {
    id: `${scope}.loggedPageTitle`,
    defaultMessage: 'Você está logado',
  },
});
