import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/CompaniesTable';

// Hooks
import { useProfileCollaborationView } from './ProfileCollaboration.hooks';

const ProfileCollaboration = () => {
  const { companies } = useProfileCollaborationView();
  return (
    <Page title="Collaboration">
      <Wrapper title="New invitations">1234</Wrapper>
      <Wrapper title="Companies">
        <Table data={companies} />
      </Wrapper>
    </Page>
  );
};

export default ProfileCollaboration;
