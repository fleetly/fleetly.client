import { useQuery } from '@apollo/client';
import { Chart } from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

// Fleetly
import { StatsRange, StatsType } from '@fleetly/provider/interfaces';

// GraphQL
import GET_CHANNEL_STATS from './Stats.gql';

// Interfaces
import { IStats } from '@interfaces/stats.interface';

export const useChannelStats = () => {
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
              borderWidth: 4,
              data: (data?.channelStats || []).map(({ y }) => y),
              fill: false,
              pointBackgroundColor: '#fff',
              pointRadius: 4,
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
                },
                maxTicksLimit: 6
              }
            }
          }
        }
      });

      return () => chart.destroy();
    }
  }, [data, $chart]);

  return {
    $chart,
    companyId,
    loading,
    range,
    setRange,
    setType,
    type
  };
};
