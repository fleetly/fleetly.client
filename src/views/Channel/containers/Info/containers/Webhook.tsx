import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import { H5, P } from '@components/Typography';

// Interfaces
import { IWebhook } from '@interfaces/webhook.interface';

// Status
import styles from './Webhook.scss';

const ChannelInfoWebhook: React.FC<IWebhook> = ({ status }) => (
  <div>
    <div className={styles.Content}>
      <H5 className={styles.Label}>Webhook</H5>
      <Status color={Color.GREEN} title={status?.type} />
      <P className={styles.Description}>
        This is a secret key that gives access to your instant messengers or
        social networks
      </P>
    </div>

    <div className={styles.Actions}>
      <Button color="primary" variant="outlined">
        Copy
      </Button>

      <Button icon="fas fa-eye" variant="outlined" />
    </div>
  </div>
);

export default ChannelInfoWebhook;
