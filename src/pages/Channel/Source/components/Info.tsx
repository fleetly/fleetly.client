import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import { P } from '@components/Typography';

// Interfaces
import { IChannelSource } from '@interfaces/channel.interface';

// Status
import styles from './Info.scss';

export const ChannelSourceInfo: React.FC<IChannelSource> = ({
  id,
  name,
  photo,
  title,
  type
}) => (
  <div className={styles.Root}>
    <Avatar alt="logo" aura classes={{ root: styles.Avatar }} src={photo} />

    <div className={styles.Info}>
      <P className={styles.Field}>
        <span className={styles.Label}>ID:</span>
        {id}
      </P>

      <P className={styles.Field}>
        <span className={styles.Label}>Name:</span>
        {name}
      </P>

      <P className={styles.Field}>
        <span className={styles.Label}>Title:</span>
        {title}
      </P>

      <P className={styles.Field}>
        <span className={styles.Label}>Type:</span>
        {type}
      </P>
    </div>
  </div>
);
