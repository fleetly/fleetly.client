import React from 'react';

// Components
import Page from '@components/Page';

// Fragments
import { ProfileUserUpdate } from './Update';

// Styles
import styles from './User.scss';

export const ProfileUser: React.FC = () => {
  return (
    <Page className={styles.Root} title="Profile">
      <ProfileUserUpdate />
    </Page>
  );
};
