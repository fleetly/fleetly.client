import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Companies from './containers/Companies';

// Hooks
import { useCollaborationView } from './Collaboration.hooks';

const Collaboration = () => {
  const { companies, invitations } = useCollaborationView();

  return (
    <Page title="Collaboration">
      {invitations.length > 0 && (
        <Wrapper title="New invitations">1234</Wrapper>
      )}

      <Companies data={companies} />
    </Page>
  );
};

export default Collaboration;
