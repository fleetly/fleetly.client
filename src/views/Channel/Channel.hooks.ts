import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_CHANNEL_BY_ID from './graphql/getChannelById.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface.ts';

const useChannel = () => {
  // Setup
  const { channelId } = useParams<{ channelId: string }>();

  // Data
  const { data } = useQuery<{ channel: IChannel }>(GET_CHANNEL_BY_ID, {
    variables: { channelId }
  });

  return { source: data?.channel?.source };
};

export { useChannel };
