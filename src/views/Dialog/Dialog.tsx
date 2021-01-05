import * as React from 'react';

// Containers
import DateGroup from './containers/Date';
import Header from './containers/Header';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        <Header />
        <div className={styles.Message}>
          <DateGroup date={new Date()} />
        </div>
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
