import { get } from 'lodash';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// GraphQL
import CREATE_CHANNEL from '@graphql/createChannel.gql';
import GET_CHANNEL_LIST from '@graphql/getChannelList.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface.ts';

// Store
import { closeModal, openModal } from '@store';
import { gqlErrorHandler } from '@components/Form';

const useChannels = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery(GET_CHANNEL_LIST, { variables: { companyId } });
  const channels: IChannel[] = get(data, 'channels', []);

  // Mutations
  const [createChannel] = useMutation(CREATE_CHANNEL, {
    refetchQueries: [{ query: GET_CHANNEL_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleAddClick = () => dispatch(openModal(ADD_CHANNEL_MODAL));

  const handleSubmit = async ({ sourceType, token }: any) => {
    try {
      await createChannel({
        variables: { companyId, sourceType, token }
      });

      return dispatch(closeModal(ADD_CHANNEL_MODAL));
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return { channels, handleAddClick, handleSubmit };
};

export { useChannels };
