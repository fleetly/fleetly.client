import { useQuery } from '@apollo/client';
import React from 'react';
import { generatePath, useParams } from 'react-router-dom';

// API
import { GET_FLOW } from '@flow/Flow.gql';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import { Builder } from '@flow/containers/Builder';

// Fragments
import { EditorPublish } from './Publish';

// Interfaces
import { FlowMode } from '@flow/interfaces/flow.interface';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

// Styles
import styles from './Editor.scss';

export const Editor: React.FC = () => {
  // Setup
  const { companyId, flowId } = useParams<{
    companyId: string;
    flowId: string;
  }>();

  // API
  const { data } = useQuery(GET_FLOW, {
    fetchPolicy: 'network-only',
    variables: { flowId, flowMode: FlowMode.DRAFT }
  });

  return (
    <Page title="Flow Editor">
      <Wrapper
        actions={<EditorPublish />}
        breadcrumbs={[
          { title: 'Flows', to: generatePath(FLOW_ROUTES.ROOT, { companyId }) },
          {
            title: data?.flow.title || 'Untitled',
            to: generatePath(FLOW_ROUTES.FLOW, { companyId, flowId })
          },
          { title: 'Edit ' }
        ]}
        classes={{ container: styles.Container }}
      >
        {data?.flow && <Builder {...data.flow} editable />}
      </Wrapper>
    </Page>
  );
};
