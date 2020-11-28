import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import { H4, H5, P } from '@components/Typography';

// Constants
import { COPY_TOKEN_MODAL, SET_TOKEN_FORM, SET_TOKEN_MODAL } from '@constants';

// Containers
import CopyForm from './containers/CopyTokenForm';
import SetForm from './containers/SetTokenForm';

// Hooks
import { useInfo } from './Info.hooks';

// Status
import styles from '../common.scss';

const ChannelInfoSecret = () => {
  const {
    handleCopyTokenClick,
    handleSetTokenClick,
    hadleSetTokenSubmit
  } = useInfo();

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
          onClick={handleCopyTokenClick}
        />
      </div>

      <Modal
        classes={{ container: styles.Container }}
        id={SET_TOKEN_MODAL}
        title="Change Token"
      >
        <P className={styles.DescriptionForm}>
          Be careful, the wrong key can stop the channel.
        </P>
        <SetForm form={SET_TOKEN_FORM} onSubmit={hadleSetTokenSubmit} />
      </Modal>

      <Modal
        classes={{ container: styles.Container }}
        id={COPY_TOKEN_MODAL}
        title="Copy Token"
      >
        <CopyForm />
      </Modal>
    </div>
  );
};

export default ChannelInfoSecret;
