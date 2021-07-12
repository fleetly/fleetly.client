import React from 'react';
import { useQuery } from 'react-apollo';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

// Components
import { Wrapper } from '@components/Page';

// GraphQL
import GET_CHANNEL_STATS from './graphql/getChannelStats.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';
import { IStats } from '@interfaces/stats.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Stat.scss';

// Utils
import { fillUrl } from '@utils/url';

const ChannelStat: React.FC<IChannel> = ({ source }) => {
  // Setup
  const { channelId, companyId } = useParams<{
    channelId: string;
    companyId: string;
  }>();

  // Data
  const { data } = useQuery<{ channelStats: IStats[] }>(GET_CHANNEL_STATS, {
    variables: { channelId }
  });

  return (
    <Wrapper
      breadcrumbs={[
        {
          title: 'Channels',
          to: fillUrl(ROUTES.COMPANY.CHANNELS, { companyId })
        },
        {
          title: source.title,
          to: fillUrl(ROUTES.COMPANY.CHANNEL, { channelId, companyId })
        }
      ]}
      classes={{ actions: styles.Actions, container: styles.Container }}
    >
      <Line
        className={styles.Chart}
        data={{
          labels: (data?.channelStats || []).map(({ x }) => x),
          datasets: [
            {
              borderColor: '#5c68ec',
              data: (data?.channelStats || []).map(({ y }) => y),
              fill: false,
              pointRadius: 0
            }
          ]
        }}
        options={{
          bezierCurve: true
        }}
        type="number"
      />
    </Wrapper>
  );
};

export default ChannelStat;
