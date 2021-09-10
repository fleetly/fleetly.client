import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Fleetly
import { CollaboratorRole } from '@fleetly/core/interfaces';

// Assets
import emptyImage1x from './Common/assets/empty@1x.png';
import emptyImage2x from './Common/assets/empty@1x.png';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';
import Image from '@components/Image';
import Loader from '@components/Loader';
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
  const { data, loading } = useQuery<{ collaborators: ICollaborator[] }>(
    GET_COLLABORATOR_LIST,
    {
      variables: { companyId }
    }
  );

  const collaborators = (data?.collaborators || []).filter(
    ({ role }) => role !== CollaboratorRole.OWNER
  );

  const hasCollaborators = collaborators.length > 0;

  return (
    <Page title="Collaborators">
      <Wrapper
        actions={
          hasCollaborators && (
            <Button
              color="blue"
              icon="far fa-plus"
              onClick={openModal}
              variant="outlined"
            >
              Add Collaborator
            </Button>
          )
        }
        title="Collaborators"
      >
        {!hasCollaborators && loading ? (
          <Loader />
        ) : (
          <>
            <CollaboratorsAdd />

            {hasCollaborators ? (
              <CollaboratorsTable data={collaborators} />
            ) : (
              <Hero
                actions={
                  <Button color="blue" onClick={openModal}>
                    Add Collaborator
                  </Button>
                }
                description="Add your like-minded people and conquer the world together."
                image={
                  <Image
                    src={emptyImage1x}
                    srcSet={{ '1x': emptyImage1x, '2x': emptyImage2x }}
                  />
                }
                title="More fun Together"
              />
            )}
          </>
        )}
      </Wrapper>
    </Page>
  );
};
