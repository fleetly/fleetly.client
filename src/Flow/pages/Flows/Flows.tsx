import React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Hooks
import { useFlows } from './Flows.hooks';

export const Flows: React.FC = () => {
  // Setup
  const { data } = useFlows();

  return (
    <Page title="Flows">
      <Wrapper title="Flows">123</Wrapper>
    </Page>
  );
};
