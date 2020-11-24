import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Page from '@components/Page';

// Container
import Info from './Info';
import Stat from './Stat';

// GraphQL
import GET_CHANNEL_BY_ID from '@graphql/getChannelById.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface.ts';

// Styles
import styles from './Channel.scss';

const Channel = () => {
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
          <Stat {...data?.channel} />
          <Info {...data?.channel} />
        </>
      )}
    </Page>
  );
};

export default Channel;
