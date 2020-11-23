import * as React from 'react';

// Components
import { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';

// Styles
import styles from './Stat.scss';

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

const ChannelStat = () => {
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
      classes={{ actions: styles.Actions, container: styles.Container }}
      title="Channels"
    >
      <div>Messages</div>
      <div>Subscribers</div>
      <div>Graph</div>
    </Wrapper>
  );
};

export default ChannelStat;
