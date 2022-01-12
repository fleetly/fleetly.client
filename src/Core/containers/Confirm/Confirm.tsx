import React from 'react';

// Components
import Button from '@components/Button';
import { Actions } from '@components/Form';
import Icon from '@components/Icon';
import Modal from '@components/Modal';
import { H3, Text } from '@components/Typography';

// Hooks
import { useConfirm } from './Confirm.hooks';

// Styles
import styles from './Confirm.scss';

// Types
import { ConfirmButton, ConfirmData } from './Confirm.types';

const DEFAULT_BUTTONS: ConfirmButton[] = [
  {
    role: 'reject',
    title: 'Cancel',
    variant: 'outlined'
  },
  {
    color: 'blue',
    role: 'resolve',
    title: 'Confirm'
  }
];

export const Confirm: React.FC = () => {
  // Setup
  const { id } = useConfirm();

  return (
    <Modal id={id!}>
      {({
        buttons = DEFAULT_BUTTONS,
        description,
        icon,
        onReject,
        onResolve,
        title
      }: ConfirmData) => (
        <div className={styles.Root}>
          {icon && (
            <Icon
              className={styles.Icon}
              color={icon?.color}
              icon={icon.name}
            />
          )}

          <H3>{title}</H3>

          {description && (
            <Text
              className={styles.Description}
              component="div"
              weight="medium"
            >
              {description}
            </Text>
          )}

          <Actions>
            {buttons.map(({ role, ...button }, index) => (
              <Button
                {...button}
                key={index}
                onClick={role === 'reject' ? onReject : onResolve}
              />
            ))}
          </Actions>
        </div>
      )}
    </Modal>
  );
};
