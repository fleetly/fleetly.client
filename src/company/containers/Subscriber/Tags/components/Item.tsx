import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Item.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface SubscriberTagsItemProps {
  id: string;
  color: Color;
  onRemove(event: React.SyntheticEvent<HTMLButtonElement>): void;
  title: string;
}

export const SubscriberTagsItem: React.FC<SubscriberTagsItemProps> = ({
  id,
  color,
  onRemove,
  title
}) => (
  <div
    className={classNames(
      styles.Root,
      getClassName('color', { collection: styles, value: color })
    )}
  >
    <Text
      className={styles.Label}
      component="div"
      size="small"
      weight="semiBold"
    >
      {title}
    </Text>

    <button
      className={styles.Remove}
      data-tag-id={id}
      onClick={onRemove}
      type="button"
    >
      <i className="far fa-times" />
    </button>
  </div>
);
