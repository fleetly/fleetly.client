import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';
import Table from '@components/Table';

// Hooks
import { useSubscribers } from './Subscribers.hooks';

const Subscribers = () => {
  const { columns, data } = useSubscribers();

  return (
    <Page title="Subscribers">
      <Wrapper title={`Subscribers (${data.length})`}>
        <Table columns={columns} data={data} />
      </Wrapper>
    </Page>
  );
};

export default Subscribers;
