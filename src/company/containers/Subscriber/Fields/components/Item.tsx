import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

// Components
import Button from '@components/Button';
import { Text } from '@components/Typography';

// Constants
import { SET_FIELD_MODAL } from '@constants';

// Store
import { useModals } from '@store';

// Styles
import styles from './Item.scss';

// Utils
import { copyToClipboard } from '@utils/clipboard';
import { getClassName } from '@utils/styles';

export interface SubscriberFieldsItemProps {
  id: string;
  color: Color;
  onRemove(event: React.SyntheticEvent<HTMLButtonElement>): void;
  title: string;
  value?: any;
}

export const SubscriberFieldsItem: React.FC<SubscriberFieldsItemProps> = ({
  id,
  color,
  onRemove,
  title,
  value
}) => {
  // Setup
  const { openModal } = useModals(SET_FIELD_MODAL);

  // State
  const [isCopied, setCopyState] = useState<boolean>(false);

  // Handlers
  const handleCopyClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      copyToClipboard(value);
      setCopyState(true);

      setTimeout(() => setCopyState(false), 1000);
    },
    [value]
  );

  const handleItemClick = useCallback(() => {
    openModal({ data: { fieldId: id, title, value } });
  }, [id, openModal, title, value]);

  return (
    <div
      className={classNames(
        styles.Root,
        getClassName('color', { collection: styles, value: color })
      )}
      onClick={handleItemClick}
      role="button"
      tabIndex={0}
    >
      <Text
        className={styles.Title}
        component="div"
        size="small"
        weight="semiBold"
      >
        {title}
      </Text>

      {value && (
        <>
          <Text className={styles.Value} component="div">
            {value}
          </Text>

          <div className={styles.Cover} />

          <div className={styles.Actions}>
            <Button
              icon={classNames({
                'far fa-clipboard': !isCopied,
                'far fa-clipboard-check': isCopied
              })}
              onClick={handleCopyClick}
              variant="outlined"
            />

            <Button
              color="danger"
              data-field-id={id}
              icon="far fa-times"
              onClick={onRemove}
              variant="outlined"
            />
          </div>
        </>
      )}
    </div>
  );
};
