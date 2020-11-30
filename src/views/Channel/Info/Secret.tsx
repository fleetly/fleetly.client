import * as React from 'react';

// Components
import Button from '@components/Button';
import { H4, H5, P } from '@components/Typography';

// Constants
import { SET_CHANNEL_TOKEN_MODAL, SHOW_CHANNEL_TOKEN_MODAL } from '@constants';

// Status
import styles from '../common.scss';

// Store
import { useModals } from '@store';

const ChannelInfoSecret = () => {
  const { openModal } = useModals();

  // Handlers
  const handleSetTokenClick = React.useCallback(
    () => openModal(SET_CHANNEL_TOKEN_MODAL),
    [openModal]
  );

  const handleShowTokenClick = React.useCallback(
    () => openModal(SHOW_CHANNEL_TOKEN_MODAL),
    [openModal]
  );

  return (
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
        <Button
          color="primary"
          variant="outlined"
          onClick={handleSetTokenClick}
        >
          Set Token
        </Button>

        <Button
          icon="fas fa-eye"
          variant="outlined"
          onClick={handleShowTokenClick}
        />
      </div>
    </div>
  );
};

export default ChannelInfoSecret;
