import { useCallback } from 'react';
import { useMutation } from 'react-apollo';
import { useHistory, useParams } from 'react-router-dom';

// GraphQL
import DELETE_CHANNEL from '../../graphql/deleteChannel.gql';
import DISABLE_CHANNEL from '../../graphql/disableChannel.gql';
import ENABLE_CHANNEL from '../../graphql/enableChannel.gql';
import GET_CHANNEL_LIST from '../../graphql/getChannelList.gql';

// Routes
import ROUTES from '@routes';

// Utils
import { fillUrl } from '@utils/url';

const useChannelsTable = () => {
  // Setup
  const { push } = useHistory();
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

  const handleRowClick = useCallback(
    ({ id }: any) => {
      push(fillUrl(ROUTES.COMPANY.CHANNEL, { channelId: id, companyId }));
    },
    [companyId, push]
  );

  return {
    handleDeleteClick: clickWrapper(deleteChannel),
    handleDisableClick: clickWrapper(disableChannel),
    handleEnableClick: clickWrapper(enableChannel),
    handleRowClick
  };
};

export { useChannelsTable };
