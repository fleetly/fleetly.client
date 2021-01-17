import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Header from './Header';

// Styles
import styles from './Chat.scss';

const Chat = () => (
  <Page title="Chat">
    <Wrapper title="Chat">
      <div className={styles.Header}>
        <Header />
      </div>

      <div className={styles.Messages}>123</div>
    </Wrapper>
  </Page>
);

export default Chat;
