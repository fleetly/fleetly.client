import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { COPY_TOKEN_MODAL } from '@constants';
import { SET_TOKEN_MODAL } from '@constants';

// GrapQL
import GET_CHANNEL_TOKEN from './graphql/getChannelToken.gql';
import SET_CHANNEL_TOKEN from './graphql/setChannelToken.gql';

// Store
import { openModal } from '@store';

const useInfo = () => {
  // Sutep
  const { channelId } = useParams<{ channelId: string }>();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery(GET_CHANNEL_TOKEN, {
    variables: { channelId }
  });

  // Mutation
  const [setChannelToken] = useMutation(SET_CHANNEL_TOKEN);

  const handleCopyTokenClick = () => dispatch(openModal(COPY_TOKEN_MODAL));
  const handleSetTokenClick = () => dispatch(openModal(SET_TOKEN_MODAL));

  const hadleSetTokenSubmit = React.useCallback(
    async ({ newToken }: Channel.Token) => {
      try {
        await setChannelToken({ variables: { channelId, newToken } });
        return true;
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [channelId, setChannelToken]
  );

  return {
    channelToken: data?.channelToken,
    handleCopyTokenClick,
    handleSetTokenClick,
    hadleSetTokenSubmit,
    setChannelToken
  };
};

export { useInfo };
