import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Styles
import styles from './Header.scss';

const DialogHeader: React.FC<Chat.Dialog.HeaderProps> = ({ subscriber }) => {
  const { firstname, lastname, photo, type } = subscriber?.source || {};

  return (
    <div className={styles.Root}>
      {subscriber && (
        <div className={styles.Subscriber}>
          <Avatar src={photo} sourceType={type} />

          <div className={styles.Name}>
            {firstname} {lastname}
          </div>
        </div>
      )}

      <div className={styles.Actions}>
        <Button
          className={styles.Action}
          icon="far fa-search"
          variant="outlined"
        />
        <Button
          className={styles.Action}
          icon="far fa-bell"
          variant="outlined"
        />

        <Button className={styles.Confirm} color="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default DialogHeader;
