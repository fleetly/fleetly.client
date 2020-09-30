import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// Hooks
import { useChannels } from './Channels.hooks';

const Channels = () => {
  const { channels, handleAddClick } = useChannels();

  return (
    <Page title="Channels">
      <Wrapper
        actions={
          <Button color="primary" onClick={handleAddClick}>
            Add Channel
          </Button>
        }
        title="Channels"
      >
        <Table data={channels} />

        <Modal id={ADD_CHANNEL_MODAL} title="Add channel">
          123
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Channels;
