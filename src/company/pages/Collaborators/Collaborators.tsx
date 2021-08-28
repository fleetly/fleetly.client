import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Constants
import { ADD_COLLABORATOR_MODAL } from '@constants';

// Fragments
import { CollaboratorsAdd } from './Add';
import { CollaboratorsTable } from './Table';

// GraphQL
import GET_COLLABORATOR_LIST from './Collaborators.gql';

// Interfaces
import { ICollaborator } from '@interfaces/collaborator.interface';

// Store
import { useModals } from '@store';

export const Collaborators: React.FC = () => {
  // Setup
  const { openModal } = useModals(ADD_COLLABORATOR_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ collaborators: ICollaborator[] }>(
    GET_COLLABORATOR_LIST,
    {
      variables: { companyId }
    }
  );

  return (
    <Page title="Collaborators">
      <Wrapper
        actions={
          <Button color="primary" onClick={openModal}>
            Add Collaborator
          </Button>
        }
        title="Collaborators"
      >
        <CollaboratorsTable data={data?.collaborators || []} />
        <CollaboratorsAdd />
      </Wrapper>
    </Page>
  );
};
