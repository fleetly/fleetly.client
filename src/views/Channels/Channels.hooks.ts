import { get } from 'lodash';
import { useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// GraphQL
import GET_CHANNEL_LIST from './graphql/getChannelList.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface.ts';

// Store
import { openModal } from '@store';

const useChannels = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery(GET_CHANNEL_LIST, { variables: { companyId } });
  const channels: IChannel[] = get(data, 'channels', []);

  // Handlers
  const handleAddClick = () => dispatch(openModal(ADD_CHANNEL_MODAL));

  return { channels, handleAddClick };
};

export { useChannels };
