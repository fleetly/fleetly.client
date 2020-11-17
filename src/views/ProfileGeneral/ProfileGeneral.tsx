import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Form from './containers/Form';

// Hooks
import { useProfileGeneralsView } from './ProfileGeneral.hooks';

// Styles
import styles from './ProfileGeneral.scss';

const ProfileGeneral = () => {
  const { handleFormSubmit, user } = useProfileGeneralsView();

  return (
    <Page classes={{ container: styles.Root }} title="Profile">
      <Wrapper classes={{ container: styles.Container }} title="Profile">
        <Form initialValues={user} onSubmit={handleFormSubmit} />
      </Wrapper>

      <Wrapper title="Account">123</Wrapper>
    </Page>
  );
};

export default ProfileGeneral;
