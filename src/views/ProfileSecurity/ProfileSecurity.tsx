import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import UpdatePassword from './containers/UpdatePassword';
import Sessions from './containers/Sessions';
import TwoStepVerification from './containers/TwoStepVerification';

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
        <UpdatePassword onSubmit={handleFormSubmit} />
      </Wrapper>
      <div>
        <Wrapper
          classes={{ container: styles.Verification }}
          title="Two-Step Verification"
        >
          <TwoStepVerification />
        </Wrapper>
        <Sessions />
      </div>
    </Page>
  );
};

export default ProfileSecurity;
