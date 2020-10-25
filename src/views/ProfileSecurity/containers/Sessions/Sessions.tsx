import * as React from 'react';

// Components
import Button from '@components/Button';
import { Wrapper } from '@components/Page';
import Table from '@components/Table';

// Hooks
import { useSessions } from './Sessions.hooks';

const Session = () => {
  const { columns, handleDeleteAllClick, sessions } = useSessions();

  return (
    <Wrapper
      actions={
        <Button
          color="danger"
          variant="outlined"
          onClick={handleDeleteAllClick}
        >
          Delete All
        </Button>
      }
      title="Recent Devices"
    >
      <Table columns={columns} data={sessions} />
    </Wrapper>
  );
};

export default Session;
