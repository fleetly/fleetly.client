import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import DELETE_CHANNEL from '../../graphql/deleteChannel.gql';
import DISABLE_CHANNEL from '../../graphql/disableChannel.gql';
import ENABLE_CHANNEL from '../../graphql/enableChannel.gql';
import GET_CHANNEL_LIST from '../../graphql/getChannelList.gql';

const useChannelsTable = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [deleteChannel] = useMutation(DELETE_CHANNEL, {
    refetchQueries: [{ query: GET_CHANNEL_LIST, variables: { companyId } }]
  });

  const [disableChannel] = useMutation(DISABLE_CHANNEL);
  const [enableChannel] = useMutation(ENABLE_CHANNEL);

  // Handlers
  const clickWrapper = useCallback(
    (mutate: any) => (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      const channelId = event.currentTarget.getAttribute('id');

      if (channelId) {
        mutate({ variables: { channelId } });
      }
    },
    []
  );

  return {
    handleDeleteClick: clickWrapper(deleteChannel),
    handleDisableClick: clickWrapper(disableChannel),
    handleEnableClick: clickWrapper(enableChannel)
  };
};

export { useChannelsTable };
