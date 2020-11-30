import { useCallback } from 'react';
import { useApolloClient, useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Form
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_CHANNEL_TOKEN from './graphql/getChannelToken.gql';
import SET_CHANNEL_TOKEN from './graphql/setChannelToken.gql';

// Store
import { useModals } from '@store';
import { copyToClipboard } from '@utils/clipboard';

const useChannelTokenView = () => {
  // Setup
  const client = useApolloClient();
  const { closeModals } = useModals();
  const { channelId } = useParams<{ channelId: string }>();

  // Mutations
  const [setChannelToken] = useMutation(SET_CHANNEL_TOKEN);

  // Handlers
  const handleSetSubmit = useCallback(
    async ({ newToken }: Channel.TokenSetFormValues) => {
      try {
        await setChannelToken({ variables: { channelId, newToken } });
        return closeModals();
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [channelId, closeModals, setChannelToken]
  );

  const handleShowSubmit = useCallback(async () => {
    try {
      const { data } = await client.query<{ channelToken: string }>({
        query: GET_CHANNEL_TOKEN,
        variables: { channelId }
      });

      copyToClipboard(data.channelToken);
      return closeModals();
    } catch (error) {
      return gqlErrorHandler(error);
    }
  }, [channelId, client, closeModals]);

  return {
    handleSetSubmit,
    handleShowSubmit
  };
};

export { useChannelTokenView };
