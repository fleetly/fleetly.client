import { useQuery } from '@apollo/client';
import React from 'react';

// Components
import Page from '@components/Page';

// Fragments
import { CollaborationCompanies } from './Companies';

// GraphQL
import GET_COLLABORATION_LIST from './Collaboration.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

export const Collaboration: React.FC = () => {
  // Data
  const { data } = useQuery<{ companies: ICompany[] }>(GET_COLLABORATION_LIST);

  return (
    <Page title="Collaboration">
      <CollaborationCompanies data={data?.companies || []} />
    </Page>
  );
};
