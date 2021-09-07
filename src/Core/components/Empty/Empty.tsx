import React from 'react';

// Components
import Icon from '@components/Icon';
import { H4, Text } from '@components/Typography';

// Styles
import styles from './Empty.scss';

export interface EmptyProps {
  actions?: React.ReactNode;
  description?: string;
  icon?: string;
  image?: React.ReactNode;
  title: string;
}

const Empty: React.FC<EmptyProps> = ({
  actions,
  description,
  icon,
  image,
  title
}) => (
  <div className={styles.Root}>
    <div className={styles.Content}>
      {icon && <Icon className={styles.Icon} icon={icon} />}
      {image}

      <H4 className={styles.Title}>{title}</H4>

      {description && (
        <Text className={styles.Description} component="div">
          {description}
        </Text>
      )}

      {actions && <div className={styles.Actions}>{actions}</div>}
    </div>
  </div>
);

export default Empty;
