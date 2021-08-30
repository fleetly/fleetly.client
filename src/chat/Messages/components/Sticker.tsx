import * as React from 'react';

// Styles
import styles from './Sticker.scss';

const ChatMessagesSticker: React.FC<Chat.Messages.Text> = ({
  date,
  sticker
}) => (
  <div className={styles.Root}>
    <img alt="Sticker" className={styles.Image} src={sticker?.url} />
    <div className={styles.Date}>{date}</div>
  </div>
);

export default ChatMessagesSticker;
