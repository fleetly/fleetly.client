import * as React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup } from 'react-transition-group';

// Components
import Transition from '@components/Transition';
import Bar from './components/Bar';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Notifications.scss';

const Notifications: React.FC<{}> = () => {
  const { notifications } = useNotifications();

  return ReactDOM.createPortal(
    <TransitionGroup className={styles.Root}>
      {notifications.map((notification) => (
        <Transition
          key={notification.id}
          duration={400}
          enter="zoomIn"
          exit="zoomOut"
        >
          <div>
            <Bar key={notification.id} {...notification} />
          </div>
        </Transition>
      ))}
    </TransitionGroup>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Notifications;
