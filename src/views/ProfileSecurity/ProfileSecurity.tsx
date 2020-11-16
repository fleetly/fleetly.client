import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Sessions from './containers/Sessions';

// Styles
import styles from './ProfileSecurity.scss';

const ProfileSecurity = () => (
  <Page classes={{ container: styles.Root }} title="Security">
    <Wrapper title="Change password">123</Wrapper>
    <Sessions />
  </Page>
);

export default ProfileSecurity;
