import * as React from 'react';

// Components
import Button from '@components/Button';
import { H4, H5, P } from '@components/Typography';

// Status
import styles from '../common.scss';

const ChannelInfoSecret = () => (
  <div>
    <div className={styles.Content}>
      <H5 className={styles.Label}>Secret Key</H5>
      <H4>Never pass this key to anyone</H4>
      <P className={styles.Description}>
        This is a secret key that gives access to your instant messengers or
        social networks
      </P>
    </div>

    <div className={styles.Actions}>
      <Button color="primary" variant="outlined">
        Set Token
      </Button>

      <Button icon="fas fa-eye" variant="outlined" />
    </div>
  </div>
);

export default ChannelInfoSecret;
