import { useQuery } from '@apollo/client';
import React from 'react';
import { generatePath, useParams } from 'react-router-dom';

// API
import { GET_FLOW } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Containers
import { Builder } from '@flow/builder';

// Interfaces
import { FlowMode } from '@flow/interfaces/flow.interface';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

// Styles
import styles from './Viewer.scss';

export const Viewer: React.FC = () => {
  // Setup
  const { companyId, flowId } = useParams<{
    companyId: string;
    flowId: string;
  }>();

  // API
  const { data } = useQuery(GET_FLOW, {
    fetchPolicy: 'network-only',
    variables: { flowId, flowMode: FlowMode.PUBLIC }
  });

  return (
    <Page title="Flow Editor">
      <Wrapper
        actions={
          <Button
            color="blue"
            icon="far fa-edit"
            to={generatePath(FLOW_ROUTES.FLOW_EDIT, { companyId, flowId })}
            variant="outlined"
          >
            Edit Flow
          </Button>
        }
        breadcrumbs={[
          { title: 'Flows', to: generatePath(FLOW_ROUTES.ROOT, { companyId }) },
          {
            title: data?.flow.title || 'Untitled'
          }
        ]}
        classes={{ container: styles.Container }}
      >
        {data?.flow && <Builder {...data.flow} />}
      </Wrapper>
    </Page>
  );
};
