import * as React from 'react';

// Components
import Dialog from './Dialog';
import Thread from './Thread';

// Styles
import styles from './Chat.scss';

const Chat = () => (
  <div className={styles.Root}>
    <Thread />
    <Dialog />
  </div>
);

export default Chat;
