import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Companies from './Companies';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

const Collaboration = () => {
  // Data
  const { data } = useQuery<{ companies: ICompany[] }>(GET_COMPANY_LIST);

  const companies = data?.companies || [];
  const invitations = [];

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
