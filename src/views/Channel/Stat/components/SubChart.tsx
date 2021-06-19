import React from 'react';
import { Line } from 'react-chartjs-2';

// Components
import Card from '@components/Card';
import { H4, Text } from '@components/Typography';

// Styles
import styles from './SubChart.scss';

interface ChannelStatSubChartProps {
  title: string;
  value: number;
}

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      backgroundColor: '#eff2fd',
      borderColor: '#5c68ec',
      data: [8, 10, 9, 12, 13, 11],
      fill: true,
      pointRadius: 0
    }
  ]
};

const ChannelStatSubChart: React.FC<ChannelStatSubChartProps> = ({
  title,
  value
}) => (
  <Card className={styles.Root}>
    <Text>{title}</Text>

    <H4 className={styles.Value}>
      {value}
      <Text className={styles.Change} size="small">
        +9
        <i className="fas fa-arrow-up" />
      </Text>
    </H4>

    <Line
      className={styles.Chart}
      data={data}
      options={{
        bezierCurve: true,
        elements: {
          line: {
            borderWidth: 2,
            tension: 0.4
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          xAxes: {
            beginAtZero: true,
            display: false
          },
          yAxes: {
            beginAtZero: true,
            display: false
          }
        }
      }}
      type="number"
    />
  </Card>
);

export default ChannelStatSubChart;
