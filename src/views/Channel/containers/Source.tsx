import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { P, H5 } from '@components/Typography';

// Hooks
import { useChannel } from '../Channel.hooks';

// Styles
import styles from './Source.scss';

const SourceForm = () => {
  const { source } = useChannel();

  return (
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.BlockAvatar}>
          <H5 className={styles.Label}>Source</H5>
          <Avatar classes={{ root: styles.Avatar }} />
        </div>
        <div className={styles.Info}>
          <P className={styles.InfoItem}>
            ID: <span className={styles.IdItem}>{source?.id}</span>
          </P>
          <P className={styles.InfoItem}>
            Name: <span className={styles.NameItem}>{source?.name}</span>
          </P>
          <P className={styles.InfoItem}>
            Title: <span className={styles.TitleItem}>{source?.title}</span>
          </P>
          <P className={styles.InfoItem}>
            Type: <span className={styles.TypeItem}>{source?.type}</span>
          </P>
        </div>
      </div>

      <div className={styles.BlockButton}>
        <Button color="danger" variant="outlined">
          Switch Off
        </Button>
        <Button icon="far fa-sync-alt" variant="outlined" />
      </div>
    </div>
  );
};

export default SourceForm;
