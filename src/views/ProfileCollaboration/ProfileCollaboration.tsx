import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/CompaniesTable';

// Hooks
import { useCollaboration } from './ProfileCollaboration.hooks';

// Styles
import styles from './ProfileCollaboration.scss';

const ProfileCollaboration = () => {
  const { collabotaions, onLeave } = useCollaboration();
  return (
    <Page title="Collaboration">
      <Wrapper title="New invitations">1234</Wrapper>
      <Wrapper title="Companies">
        <Table data={collabotaions} onLeave={onLeave} />
      </Wrapper>
    </Page>
  );
};

export default ProfileCollaboration;
