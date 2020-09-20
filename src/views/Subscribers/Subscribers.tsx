import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Hooks
import { useSubscribers } from './Subscribers.hooks';

const Subscribers = () => {
  const { subscribers } = useSubscribers();

  return (
    <Page title="Subscribers">
      <Wrapper title={`Subscribers (${subscribers.length})`}>
        <Table data={subscribers} />
      </Wrapper>
    </Page>
  );
};

export default Subscribers;
