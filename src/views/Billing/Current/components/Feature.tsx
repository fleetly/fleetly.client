import React from 'react';

// Components
import Icon from '@components/Icon';
import { Text } from '@components/Typography';

// Styles
import styles from './Feature.scss';

interface PropTypes {
  color: Color;
  icon?: string;
  title: string;
}

const BillingCurrentFeature: React.FC<PropTypes> = ({
  color,
  icon = 'fas fa-check',
  title
}) => (
  <div className={styles.Root}>
    <Icon
      className={styles.Icon}
      color={color}
      icon={icon}
      variant="outlined"
    />

    <Text>{title}</Text>
  </div>
);

export default BillingCurrentFeature;
