import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Styles
import styles from './Header.scss';

const DialogHeader = () => (
  <div className={styles.Root}>
    <div className={styles.Subscriber}>
      <Avatar />
      <div className={styles.Info}>
        Firstname Lastname
        <div className={styles.Online}>Last online</div>
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
