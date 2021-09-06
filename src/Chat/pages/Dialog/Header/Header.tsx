import classNames from 'classnames';
import React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { Text } from '@components/Typography';

// Containers
import { DialogHeaderSearch } from './containers/Search';

// Hooks
import { useDialogHeader } from './Header.hooks';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

// Styles
import styles from './Header.scss';

export const DialogHeader: React.FC<IChat> = ({
  id,
  subscriber: {
    source: { firstname, lastname, photo, type }
  }
}) => {
  // Setup
  const {
    handleCloseClick,
    handleSubscriberClick,
    handleTriggerClick,
    isOpened,
    loading
  } = useDialogHeader();

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsOpened]: isOpened })}
    >
      <div className={styles.Header}>
        <div
          className={styles.Subscriber}
          onClick={handleSubscriberClick}
          role="button"
          tabIndex={0}
        >
          <Avatar alt={firstname} sourceType={type} src={photo} toColor={id} />

          <Text className={styles.Name} weight="semiBold">
            {firstname} {lastname}
          </Text>
        </div>

        <div className={styles.Actions}>
          <Button
            className={styles.Search}
            icon="far fa-search"
            onClick={handleTriggerClick}
            variant="outlined"
          />

          <Button color="blue" loaded={loading} onClick={handleCloseClick}>
            Confirm
          </Button>
        </div>
      </div>

      <div className={styles.Form}>
        <DialogHeaderSearch onCancel={handleTriggerClick} />
      </div>
    </div>
  );
};
