import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Page, { Wrapper } from '@components/Page';

// Domains
import { ChannelSecret } from './Secret';
import { ChannelSource } from './Source';
import { ChannelStats } from './Stats';
import { ChannelWebhook } from './Webhook';

// GraphQL
import GET_CHANNEL_BY_ID from '@graphql/getChannelById.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Styles
import styles from './Channel.scss';

const Channel: React.FC = () => {
  // Setup
  const { channelId } = useParams<{ channelId: string }>();

  // Data
  const { data } = useQuery<{ channel: IChannel }>(GET_CHANNEL_BY_ID, {
    variables: { channelId }
  });

  const channel = data?.channel;

  return (
    <Page classes={{ container: styles.Root }} title="Channels">
      {channel && (
        <>
          <ChannelStats {...channel} />

          <Wrapper classes={{ container: styles.Info }} title="Information">
            <ChannelSource {...channel} />
            <ChannelSecret />
            <ChannelWebhook {...channel.webhook} />
          </Wrapper>

          {/* <Wrapper classes={{ container: styles.Info }} title="Information">
            <Source {...data?.channel} />
            <Secret />
            <Webhook {...data?.channel.webhook} />
          </Wrapper> */}
        </>
      )}
    </Page>
  );
};

export default Channel;
