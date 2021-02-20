import * as React from 'react';

// Fleetly
import { ChatStatus } from '@fleetly/chat/dist/common/interfaces';

// Components
import Button from '@components/Button';

// Containers
import List from './containers/List';

// Styles
import styles from './Threads.scss';

const Threads = () => {
  // State
  const [status, setStatus] = React.useState(ChatStatus.OPENED);

  // Handlers
  const handleStatusChange = React.useCallback(
    () =>
      setStatus(
        status === ChatStatus.OPENED ? ChatStatus.CLOSED : ChatStatus.OPENED
      ),
    [status]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Actions}>
        <Button
          className={styles.Action}
          color={status === ChatStatus.OPENED ? 'primary' : 'default'}
          onClick={handleStatusChange}
          variant={status === ChatStatus.OPENED ? 'filled' : 'outlined'}
        >
          Opened
        </Button>

        <Button
          className={styles.Action}
          color={status === ChatStatus.CLOSED ? 'primary' : 'default'}
          onClick={handleStatusChange}
          variant={status === ChatStatus.CLOSED ? 'filled' : 'outlined'}
        >
          Closed
        </Button>
      </div>

      <List status={status} />
    </div>
  );
};

export default Threads;
