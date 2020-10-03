import { useCallback } from 'react';
import { useMutation } from 'react-apollo';

// GraphQL
import DISABLE_CHANNEL from '../graphql/disableChannel.gql';
import ENABLE_CHANNEL from '../graphql/enableChannel.gql';

const useChannelsTable = () => {
  // Mutations
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
    handleDisableClick: clickWrapper(disableChannel),
    handleEnableClick: clickWrapper(enableChannel)
  };
};

export { useChannelsTable };
