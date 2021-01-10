import * as React from 'react';

// Components
import Dialog from './Dialog';
import Threads from './Threads';

// Styles
import styles from './Chat.scss';

const Chat = () => (
  <div className={styles.Root}>
    <Threads />
    <Dialog />
  </div>
);

export default Chat;
