import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Page, { Wrapper } from '@components/Page';

// Domains
import Secret from './Secret';
import Source from './Source';
import Stats from './Stats';
import Webhook from './Webhook';

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

  return (
    <Page classes={{ container: styles.Root }} title="Channels">
      {data?.channel && (
        <>
          <Stats {...data?.channel} />

          <Wrapper classes={{ container: styles.Info }} title="Information">
            <Source {...data?.channel} />
            <Secret />
            <Webhook {...data?.channel.webhook} />
          </Wrapper>
        </>
      )}
    </Page>
  );
};

export default Channel;
