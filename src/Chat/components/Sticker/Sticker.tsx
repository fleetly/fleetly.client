import React from 'react';

// Components
import { Text } from '@components/Typography';
import { MessageProps } from '../Message';

// Styles
import styles from './Sticker.scss';

export const Sticker: React.FC<MessageProps> = ({ date, sticker }) => (
  <div className={styles.Root}>
    <img alt="Sticker" className={styles.Image} src={sticker?.url} />
    <Text className={styles.Date} component="div" size="small">
      {date}
    </Text>
  </div>
);
