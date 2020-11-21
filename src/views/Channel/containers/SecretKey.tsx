import * as React from 'react';

// Components
import Button from '@components/Button';
import { P, H4, H5 } from '@components/Typography';

// Styles
import styles from './SecretKey.scss';

const SecretKey = () => (
  <div className={styles.Root}>
    <div className={styles.Info}>
      <H5 className={styles.Label}>Secret Key</H5>
      <H4 className={styles.Title}>Never pass this key to anyone</H4>
      <P className={styles.Description}>
        This is a secret key that gives access to your instant messengers or
        social networks
      </P>
    </div>

    <div className={styles.BlockButton}>
      <Button color="primary" variant="outlined">
        Set Token
      </Button>
      <Button icon="far fa-eye" variant="outlined" />
    </div>
  </div>
);

export default SecretKey;
