import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useField } from 'react-final-form';

// Components
import Icon from '@components/Icon';
import { Text } from '@components/Typography';

// Styles
import styles from './Source.scss';

export interface ChannelAddSourceItem {
  id: string;
  icon: string;
  isDisabled?: boolean;
  title: string;
}

export interface ChannelsAddSourceProps {
  name: string;
  sources: ChannelAddSourceItem[];
}

export const ChannelsAddSource: React.FC<ChannelsAddSourceProps> = ({
  name,
  sources
}) => {
  // Setup
  const {
    input: { onChange, value }
  } = useField(name);

  // Handlers
  const handleItemClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) =>
      onChange(event.currentTarget.dataset.sourceId),
    [onChange]
  );

  return (
    <div className={styles.Root}>
      {sources.map(({ id, icon, isDisabled, title }) => (
        <div
          className={classNames(styles.Item, {
            [styles.ItemIsDisabled]: isDisabled,
            [styles.ItemIsSelected]: id === value
          })}
          data-source-id={id}
          key={id}
          onClick={handleItemClick}
          role="button"
          tabIndex={0}
        >
          <Icon className={styles.Icon} icon={icon} />

          <Text
            className={styles.Title}
            component="div"
            size="small"
            weight="semiBold"
          >
            {title}
          </Text>
        </div>
      ))}
    </div>
  );
};
