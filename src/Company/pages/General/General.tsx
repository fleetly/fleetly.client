import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';

// Components
import Loader from '@components/Loader';
import Page, { Wrapper } from '@components/Page';

// Fragments
import { GeneralDisable } from './Disable';
import { GeneralDelete } from './Delete';
import { GeneralRename } from './Rename';
import { GeneralUpdate } from './Update';

// GraphQL
import GET_COMPANY from './General.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Styles
import styles from './General.scss';

export const General = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ company: ICompany }>(GET_COMPANY, {
    variables: { companyId }
  });

  return (
    <Page className={styles.Root} title="General">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Wrapper classes={{ container: styles.Container }} title="Company ">
            <GeneralUpdate {...data!.company} />
          </Wrapper>

          <Wrapper classes={{ container: styles.Danger }} title="Danger zone">
            <GeneralDisable {...data!.company} />
            <GeneralRename {...data!.company} />
            <GeneralDelete {...data!.company} />
          </Wrapper>
        </>
      )}
    </Page>
  );
};
