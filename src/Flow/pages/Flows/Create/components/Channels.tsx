import { useQuery } from '@apollo/client';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

// API
import { GET_CHANNELS } from '@core/graphql/channels.gql';

// Components
import { Select } from '@components/Form';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

export const FlowsCreateChannels: React.FC = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // API
  const { data, loading } = useQuery<{ channels: IChannel[] }>(GET_CHANNELS, {
    variables: { companyId }
  });

  // Memo
  const options = useMemo(
    () =>
      data?.channels.map(({ id, source }) => {
        return {
          avatar: { src: source.photo },
          description: `@${source.name}`,
          label: source.title,
          value: id
        };
      }) || [],
    [data]
  );

  return (
    <Select
      label="Allowed channels"
      loaded={loading}
      multiplied
      name="channels"
      options={options}
      placeholder="or leave blank for all channels"
    />
  );
};
