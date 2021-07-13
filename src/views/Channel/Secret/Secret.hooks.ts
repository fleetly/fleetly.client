import { ApolloError } from 'apollo-boost';
import { useCallback } from 'react';
import { useApolloClient, useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Constants
import { SET_CHANNEL_TOKEN_MODAL, SHOW_CHANNEL_TOKEN_MODAL } from '@constants';

// Form
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_CHANNEL_TOKEN from './graphql/getChannelToken.gql';
import SET_CHANNEL_TOKEN from './graphql/setChannelToken.gql';

// Store
import { useModals } from '@store';

// Utils
import { copyToClipboard } from '@utils/clipboard';

const useChannelSecretView = () => {
  // Setup
  const client = useApolloClient();
  const { closeModals, openModal } = useModals();
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
        return gqlErrorHandler(error as ApolloError);
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
      return gqlErrorHandler(error as ApolloError);
    }
  }, [channelId, client, closeModals]);

  const openSetModal = useCallback(() => openModal(SET_CHANNEL_TOKEN_MODAL), [
    openModal
  ]);

  const openShowModal = useCallback(() => openModal(SHOW_CHANNEL_TOKEN_MODAL), [
    openModal
  ]);

  return {
    handleSetSubmit,
    handleShowSubmit,
    openSetModal,
    openShowModal
  };
};

export { useChannelSecretView };
