import { ChannelStatus } from '@fleetly/common/dist/interfaces';
import * as React from 'react';
import { useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import DISABLE_CHANNEL from '@graphql/disableChannel.gql';
import ENABLE_CHANNEL from '@graphql/enableChannel.gql';
import SYNC_CHANNEL from '@graphql/syncChannel.gql';
import { useNotifications } from '@store';

const useChannelInfoSourceView = (status: ChannelStatus) => {
  // Setup
  const { channelId } = useParams<{ channelId: string }>();
  const { handleApolloError } = useNotifications();

  // Data
  const isActive = status === ChannelStatus.ACTIVE;

  // Mutations
  const variables = { channelId };

  const [
    disableChannel,
    { loading: disableIsLoading }
  ] = useMutation(DISABLE_CHANNEL, { variables });

  const [
    enableChannel,
    { loading: enableIsLoading }
  ] = useMutation(ENABLE_CHANNEL, { variables });

  const [syncChannel, { loading: syncIsLoading }] = useMutation(SYNC_CHANNEL, {
    onError: handleApolloError,
    variables
  });

  /// Handlers
  const handleSyncClick = React.useCallback(() => syncChannel(), [syncChannel]);
  const handleSwitchClick = React.useCallback(
    () => (isActive ? disableChannel() : enableChannel()),
    [disableChannel, enableChannel, isActive]
  );

  return {
    isActive,
    isLoading: disableIsLoading || enableIsLoading,
    handleSyncClick,
    handleSwitchClick,
    syncIsLoading
  };
};

export { useChannelInfoSourceView };
