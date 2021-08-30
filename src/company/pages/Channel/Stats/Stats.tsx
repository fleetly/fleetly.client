import React from 'react';

// Fleetly
import { StatsType } from '@fleetly/provider/interfaces';

// Components
import Loader from '@components/Loader';
import { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';

import Range from './components/Range';

// Hooks
import { useChannelStats } from './Stats.hooks';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Stats.scss';

// Utils
import { fillUrl } from '@utils/url';

export const ChannelStats: React.FC<IChannel> = ({ id, source }) => {
  // Setup
  const {
    $chart,
    companyId,
    loading,
    range,
    setRange,
    setType,
    type
  } = useChannelStats();

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
          to: fillUrl(ROUTES.COMPANY.CHANNEL, { channelId: id, companyId })
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
