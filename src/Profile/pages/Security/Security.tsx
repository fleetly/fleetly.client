import React from 'react';

// Components
import Page from '@components/Page';

// Fragments
import { SecurityPassword } from './Password';
import { SecuritySessions } from './Sessions';
import { SecurityTwoStep } from './TwoStep';

// Styles
import styles from './Security.scss';

export const Security = () => {
  return (
    <Page className={styles.Root} title="Security">
      <SecurityPassword />
      <SecurityTwoStep />
      <SecuritySessions />
    </Page>
  );
};
