import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/CompaniesTable';

// Hooks
import { useCollaboration } from './ProfileCollaboration.hooks';

const ProfileCollaboration = () => {
  const { collabotaions } = useCollaboration();
  return (
    <Page title="Collaboration">
      <Wrapper title="New invitations">1234</Wrapper>
      <Wrapper title="Companies">
        <Table data={collabotaions} />
      </Wrapper>
    </Page>
  );
};

export default ProfileCollaboration;
