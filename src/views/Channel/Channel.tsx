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
          <Tabs value="1">
            <Tab label="Messages" value="1" />
            <Tab label="Subscribers" value="2" />
            <Tab label="Subscribed" value="3" />
            <Tab label="Unsubscribed" value="4" />
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
