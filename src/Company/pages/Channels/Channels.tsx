import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Assets
import emptyImage1x from './Common/assets/empty@1x.png';
import emptyImage2x from './Common/assets/empty@1x.png';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';
import Image from '@components/Image';
import Loader from '@components/Loader';
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
  const { data, loading } = useQuery<{ channels: IChannel[] }>(
    GET_CHANNEL_LIST,
    {
      variables: { companyId }
    }
  );

  const hasChannels = data?.channels && data?.channels.length > 0;

  return (
    <Page title="Channels">
      <Wrapper
        actions={
          hasChannels && (
            <Button
              color="blue"
              icon="far fa-plus"
              onClick={openModal}
              variant="outlined"
            >
              Add Channel
            </Button>
          )
        }
        title="Channels"
      >
        {!hasChannels && loading ? (
          <Loader />
        ) : (
          <>
            <ChannelAdd />

            {hasChannels ? (
              <ChannelsTable data={data!.channels} />
            ) : (
              <Hero
                actions={
                  <Button color="blue" onClick={openModal}>
                    Add Channel
                  </Button>
                }
                description="Let's start our show by adding a channel."
                image={
                  <Image
                    src={emptyImage1x}
                    srcSet={{ '1x': emptyImage1x, '2x': emptyImage2x }}
                  />
                }
                title="Show must go on!"
              />
            )}
          </>
        )}
      </Wrapper>
    </Page>
  );
};

export default Channels;
