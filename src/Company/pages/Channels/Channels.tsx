import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';

// Fragments
import { ChannelAdd } from './Add';
import { ChannelsTable } from './Table';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// GraphQL
import GET_CHANNEL_LIST from '@graphql/getChannelList.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Store
import { useModals } from '@store';

const Channels: React.FC = () => {
  // Setup
  const { openModal } = useModals(ADD_CHANNEL_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ channels: IChannel[] }>(GET_CHANNEL_LIST, {
    variables: { companyId }
  });

  return (
    <Page title="Channels">
      <Wrapper
        actions={
          <Button color="blue" onClick={openModal}>
            Add Channel
          </Button>
        }
        title="Channels"
      >
        <ChannelAdd />

        {data?.channels && <ChannelsTable data={data?.channels} />}
      </Wrapper>
    </Page>
  );
};

export default Channels;

/* <Modal
          classes={{ container: styles.Container }}
          id={ADD_CHANNEL_MODAL}
          title="Add Channel"
        >
          <div className={styles.Description}>
            <Text>
              Fleetly will use an access token to connect and use your channel
            </Text>

            <Text className={styles.Careful}>
              Do not give the token to third parties!
            </Text>
          </div>

          <AddForm onSubmit={handleSubmit} />
        </Modal> */
