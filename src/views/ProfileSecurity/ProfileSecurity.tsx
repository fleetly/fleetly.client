import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import UpdatePasswordForm from './containers/UpdatePasswordForm';
import Sessions from './containers/Sessions';
import VerificationForm from './containers/VerificationForm';

// Hooks
import { useProfileSecurity } from './ProfileSecurity.hooks';

// Styles
import styles from './ProfileSecurity.scss';

const ProfileSecurity = () => {
  const { handleFormSubmit } = useProfileSecurity();

  return (
    <Page classes={{ container: styles.Root }} title="Security">
      <Wrapper
        classes={{ container: styles.Container }}
        title="Change password"
      >
        <UpdatePasswordForm onSubmit={handleFormSubmit} />
      </Wrapper>
      <div>
        <Wrapper
          classes={{ container: styles.Verification }}
          title="Two-Step Verification"
        >
          <VerificationForm />
        </Wrapper>
        <Sessions />
      </div>
    </Page>
  );
};

export default ProfileSecurity;
