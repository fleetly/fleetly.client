import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useField } from 'react-final-form';

// Fleetly
import { Color } from '@fleetly/common/dist/enums';

// Styles
import styles from './Color.scss';

// Utils
import { getClassName } from '@utils/styles';

export const TagsCreateColor: React.FC = () => {
  // Setup
  const {
    input: { onChange, value }
  } = useField('tag.color');

  // Handlers
  const handleItemClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) =>
      onChange(event.currentTarget.dataset.color),
    [onChange]
  );

  return (
    <div className={styles.Root}>
      {Object.keys(Color).map((key) => (
        <div
          className={classNames(
            styles.Item,
            getClassName('color', {
              collection: styles,
              prefix: 'item',
              value: key
            }),
            {
              [styles.ItemIsSelected]: value === key
            }
          )}
          data-color={key}
          key={key}
          onClick={handleItemClick}
          role="button"
          tabIndex={0}
        />
      ))}
    </div>
  );
};
