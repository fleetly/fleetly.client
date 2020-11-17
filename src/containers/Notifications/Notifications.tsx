import * as React from 'react';
import ReactDOM from 'react-dom';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Notifications.scss';

const Notifications: React.FC<{}> = () => {
  const { notifications } = useNotifications();

  return ReactDOM.createPortal(
    notifications && notifications.length > 0 && (
      <div className={styles.Root}>
        {notifications.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    ),
    document.getElementById('portal') as HTMLElement
  );
};

export default Notifications;
