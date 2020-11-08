import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Notification.scss';

// Utils
import { getClassName } from '@utils/styles';

// Components
import Button from '@components/Button';

const Notification: React.FC<any> = ({ description, title = 'Fleetly' }) => (
  <div className={styles.Root}>
    <div className={styles.Icon} />

    <div className={styles.Info}>
      <div className={styles.Title}>Notification system</div>
      <div className={styles.Description}>
        Also on Fleetly, you need to add pop-up notifications in any corner.
      </div>
    </div>

    <div className={styles.Actions}>
      <Button icon="fas fa-times" variant="outlined" />
    </div>
  </div>
);

const NotificationSuccess: React.FC<any> = ({
  description,
  title = 'Fleetly'
}) => (
  <div className={styles.Root}>
    <div className={styles.Icon} />

    <div className={styles.Info}>
      <div className={styles.Title}>Notification system</div>
      <div className={styles.Description}>
        Also on Fleetly, you need to add pop-up notifications in any corner.
      </div>
    </div>

    <div className={styles.Actions}>
      <Button icon="fas fa-times" variant="outlined" />
    </div>
  </div>
);

export default Notification;
