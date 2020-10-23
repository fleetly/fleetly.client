import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Page, { Wrapper } from '@components/Page';
import { P } from '@components/Typography';

// Containers
import Form from './containers/Form';
import Table from './containers/Table';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// Hooks
import { useChannels } from './Channels.hooks';

// Styles
import styles from './Channels.scss';

const Channels = () => {
  const { channels, handleAddClick, handleSubmit } = useChannels();

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

        <Modal
          classes={{ container: styles.Container }}
          id={ADD_CHANNEL_MODAL}
          title="Add Channel"
        >
          <div className={styles.Description}>
            <P>
              Fleetly will use an access token to connect and use your channel
            </P>
            <P className={styles.Careful}>
              Do not give the token to third parties!
            </P>
          </div>
          <Form onSubmit={handleSubmit} />
        </Modal>
      </Wrapper>
    </Page>
  );
};

export default Channels;
