import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { H5, P } from '@components/Typography';

// Interfaces
import { IChannelSource } from '@interfaces/channel.interface';

// Status
import styles from './Source.scss';

const ChannelInfoSource: React.FC<IChannelSource> = ({
  id,
  link,
  name,
  photo,
  title,
  type
}) => (
  <div>
    <div className={styles.Content}>
      <H5 className={styles.Label}>Source</H5>

      <div className={styles.Grid}>
        <Avatar alt="logo" aura classes={{ root: styles.Avatar }} src={photo} />

        <div className={styles.Info}>
          <P className={styles.Field}>
            <span className={styles.FieldLabel}>ID:</span>
            {id}
          </P>
          <P className={styles.Field}>
            <span className={styles.FieldLabel}>Name:</span>
            {name}
          </P>
          <P className={styles.Field}>
            <span className={styles.FieldLabel}>Title:</span>
            {title}
          </P>
          <P className={styles.Field}>
            <span className={styles.FieldLabel}>Type:</span>
            {type}
          </P>
        </div>
      </div>
    </div>

    <div className={styles.Actions}>
      <Button color="danger" variant="outlined">
        Switch Off
      </Button>

      <Button icon="fas fa-sync" variant="outlined" />

      <Button
        color="primary"
        icon="fas fa-external-link"
        to={link}
        variant="outlined"
      />
    </div>
  </div>
);

export default ChannelInfoSource;
