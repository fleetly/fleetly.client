import * as React from 'react';

// Components
import Dialog from './Dialog';

// Styles
import styles from './Chat.scss';

const Chat = () => (
  <div className={styles.Root}>
    <Dialog />
  </div>
);

export default Chat;
