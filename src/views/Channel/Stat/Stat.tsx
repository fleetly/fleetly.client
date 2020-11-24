import * as React from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Stat.scss';

// Utils
import { fillUrl } from '@utils/url';

const TABS = [
  {
    label: 'Messages',
    value: 'messages'
  },
  {
    label: 'Subscribers',
    value: 'subscribers'
  },
  {
    label: 'Subscribed',
    value: 'subscribed'
  },
  {
    label: 'Unsubscribed',
    value: 'unsubscribed'
  }
];

const ChannelStat: React.FC<IChannel> = ({ source }) => {
  // Setup
  const { channelId, companyId } = useParams<{
    channelId: string;
    companyId: string;
  }>();

  // State
  const [currentTab, setCurrentTab] = React.useState(TABS[0].value);

  return (
    <Wrapper
      actions={
        <Tabs
          classes={{ root: styles.Tabs }}
          onSelect={setCurrentTab}
          value={currentTab}
        >
          {TABS.map((tab) => (
            <Tab {...tab} key={tab.value} />
          ))}
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
      <div>Messages</div>
      <div>Subscribers</div>
      <div>Graph</div>
    </Wrapper>
  );
};

export default ChannelStat;
