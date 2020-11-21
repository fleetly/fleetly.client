import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';

// Container
import Information from './containers/Information';

// Styles
import styles from './Channel.scss';

const Channel = () => {
  return (
    <Page classes={{ container: styles.Root }} title="Statistic">
      <Wrapper
        actions={
          <Tabs>
            <Tab label="Messages" />
            <Tab label="Subscribers" />
            <Tab label="Subscribed" />
            <Tab label="Unsubscribed" />
          </Tabs>
        }
        classes={{ container: styles.Statistic }}
        title="Channel"
      >
        <div className={styles.Message}>Message</div>
        <div className={styles.Subscribers}>Subscribers</div>
        <div className={styles.MultiInfo}>Multi Info</div>
      </Wrapper>
      <Wrapper title="Information">
        <Information />
      </Wrapper>
    </Page>
  );
};

export default Channel;
