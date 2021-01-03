import * as React from 'react';

// Containers
import Comment from './containers/Comment';
import Header from './containers/Header';
import Group from './containers/Group';

// Components
import Page, { Wrapper } from '@components/Page';

// Styles
import styles from './Dialog.scss';

// Test
import TEST from './Test.js';

const Dialog = () => (
  <Page title="Chat">
    <Wrapper classes={{ container: styles.Root }} title="Chat">
      <div className={styles.Chat}>
        <Header />
        <div className={styles.Message}>
          {TEST.map((item: any, index: number) => (
            <Group {...item} key={index} />
          ))}

          <Comment
            date={new Date()}
            id="11"
            text="Test text"
            author="Test Author"
          />
        </div>
      </div>
    </Wrapper>
  </Page>
);

export default Dialog;
