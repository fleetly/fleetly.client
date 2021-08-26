import * as React from 'react';

// Components
import Button from '@components/Button';
import { H4, H5, P } from '@components/Typography';

// Containers
// import Set from './containers/Set';
// import Show from './containers/Set';

// Hooks
import { useChannelSecretView } from './Secret.hooks';

// Status
import styles from '../Common/common.scss';

const ChannelInfoSecret = () => {
  // Setup
  const {
    handleSetSubmit,
    handleShowSubmit,
    openSetModal,
    openShowModal
  } = useChannelSecretView();

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
        <Button color="primary" onClick={openSetModal} variant="outlined">
          Set Token
        </Button>

        <Button icon="fas fa-eye" onClick={openShowModal} variant="outlined" />
      </div>

      {/* <Set onSubmit={handleSetSubmit} /> */}
      {/* <Show onSubmit={handleShowSubmit} /> */}
    </div>
  );
};

export default ChannelInfoSecret;
