import * as React from 'react';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Hooks
import { useSessions } from './Sessions.hooks';

const Session = () => {
  const { handleAllDeleteClick, handleDeleteClick, sessions } = useSessions();

  return (
    <Page title="Sessions">
      <Wrapper
        actions={
          <Button
            color="danger"
            variant="outlined"
            onClick={handleAllDeleteClick}
          >
            Delete All
          </Button>
        }
        title="Recent Devices"
      >
        <Table data={sessions} onDelete={handleDeleteClick} />
      </Wrapper>
    </Page>
  );
};

export default Session;
