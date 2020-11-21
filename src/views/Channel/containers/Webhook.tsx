import * as React from 'react';
import { Color } from '@fleetly/common/dist/enums';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import { P, H5 } from '@components/Typography';

// Styles
import styles from './Webhook.scss';

const Webhook = () => (
  <div className={styles.Root}>
    <div className={styles.Info}>
      <H5 className={styles.Label}>Webhook</H5>
      <Status color={Color.BLUE} title="Switch On" />
      <P className={styles.Description}>
        This is a secret key that gives access to your instant messengers or
        social networks
      </P>
    </div>

    <div className={styles.BlockButton}>
      <Button color="primary" variant="outlined">
        Copy
      </Button>
      <Button icon="far fa-redo-alt" variant="outlined" />
    </div>
  </div>
);

export default Webhook;
