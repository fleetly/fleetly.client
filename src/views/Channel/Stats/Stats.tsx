import { Chart } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Fleetly
import {
  StatsRange,
  StatsType
} from '@fleetly/provider/dist/common/interfaces';

// Components
import Loader from '@components/Loader';
import { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';

import Range from './components/Range';

// GraphQL
import GET_CHANNEL_STATS from './graphql/getChannelStats.gql';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';
import { IStats } from '@interfaces/stats.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Stats.scss';

// Utils
import { fillUrl } from '@utils/url';

const ChannelStats: React.FC<IChannel> = ({ source }) => {
  // Setup
  const { channelId, companyId } = useParams<{
    channelId: string;
    companyId: string;
  }>();

  const $chart = useRef<HTMLCanvasElement>(null);

  // State
  const [range, setRange] = useState<StatsRange>(StatsRange.DAY);
  const [type, setType] = useState<StatsType>(StatsType.INCOMING_MESSAGES);

  // Data
  const { data, loading } = useQuery<{ channelStats: IStats[] }>(
    GET_CHANNEL_STATS,
    {
      variables: { channelId, range, type }
    }
  );

  // Effects
  useEffect(() => {
    if ($chart && $chart.current) {
      const chart = new Chart($chart.current as HTMLCanvasElement, {
        type: 'line',
        data: {
          labels: (data?.channelStats || []).map(({ x }) => x),
          datasets: [
            {
              borderColor: '#5c68ec',
              data: (data?.channelStats || []).map(({ y }) => y),
              fill: false,
              tension: 0.35
            }
          ]
        },
        options: {
          aspectRatio: 3.6,
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          scales: {
            xAxes: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  family: 'Montserrat',
                  size: 12,
                  weight: '600'
                }
              }
            },
            yAxes: {
              ticks: {
                font: {
                  family: 'Montserrat',
                  size: 12,
                  weight: '600'
                }
              }
            }
          }
        }
      });

      return () => chart.destroy();
    }
  }, [data, $chart]);

  return (
    <Wrapper
      actions={
        <Tabs onSelect={setType} value={type}>
          <Tab label="Messages" value={StatsType.INCOMING_MESSAGES} />
          <Tab label="Subscribers" value={StatsType.ACTIVE_USERS} />
        </Tabs>
      }
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
      {loading && <Loader className={styles.Loader} />}
      <Range onSelect={setRange} value={range} />
      <canvas className={styles.Chart} ref={$chart} />
    </Wrapper>
  );
};

export default ChannelStats;
