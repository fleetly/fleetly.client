import React from 'react';

// Components
import Button from '@components/Button';
import { H4, H5, P } from '@components/Typography';

// Constants
import { SET_CHANNEL_TOKEN_MODAL } from '@constants';

// Fragments
import { ChannelSecretToken } from './Token';

// Store
import { useModals } from '@store';

// Styles
import styles from '../Channel.scss';

export const ChannelSecret: React.FC = () => {
  // Setup
  const { openModal } = useModals(SET_CHANNEL_TOKEN_MODAL);

  return (
    <div className={styles.Section}>
      <div className={styles.Content}>
        <H5 className={styles.Label}>Secret Key</H5>
        <H4>Never pass this key to anyone</H4>
        <P className={styles.Description}>
          This is a secret key that gives access to your instant messengers or
          social networks
        </P>
      </div>

      <div className={styles.Actions}>
        <Button color="primary" onClick={openModal} variant="outlined">
          Set Token
        </Button>
      </div>

      <ChannelSecretToken />
    </div>
  );
};
