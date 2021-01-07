import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Styles
import styles from './Header.scss';

const DialogHeader: React.FC<Dialog.HeaderProps> = ({ subscriber }) => (
  <div className={styles.Root}>
    <div className={styles.Subscriber}>
      <Avatar src={subscriber?.photo} sourceType={subscriber.type} />
      <div className={styles.Name}>
        {subscriber?.firstname} {subscriber?.lastname}
      </div>
    </div>

    <div className={styles.Actions}>
      <Button
        className={styles.Action}
        icon="far fa-search"
        variant="outlined"
      />
      <Button className={styles.Action} icon="far fa-bell" variant="outlined" />
      <Button color="primary" className={styles.Confirm}>
        Confirm
      </Button>
    </div>
  </div>
);

export default DialogHeader;
