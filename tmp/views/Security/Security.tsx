import * as React from 'react';

// Components
import Page from '@components/Page';

// Containers
import Password from './containers/Password';
import Sessions from './containers/Sessions';
import TwoStep from './containers/TwoStep';

// Hooks
import { useSecurityView } from './Security.hooks';

// Styles
import styles from './Security.scss';

const Security = () => {
  const { handleFormSubmit } = useSecurityView();

  return (
    <Page classes={{ container: styles.Root }} title="Security">
      <Password onSubmit={handleFormSubmit} />
      <TwoStep />
      <Sessions />
    </Page>
  );
};

export default Security;
