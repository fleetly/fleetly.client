import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import UpdateForm from './containers/UpdateForm';

// Styles
import styles from './ProfileGeneral.scss';

const ProfileGeneral = () => {
  return (
    <Page classes={{ container: styles.Root }} title="Profile">
      <Wrapper classes={{ container: styles.Container }} title="General">
        <UpdateForm />
      </Wrapper>

      <Wrapper title="Danger section">1234</Wrapper>
    </Page>
  );
};

export default ProfileGeneral;
