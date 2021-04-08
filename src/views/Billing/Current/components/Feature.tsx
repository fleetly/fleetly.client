import React from 'react';

// Components
import Icon from '@components/Icon';
import { H5 } from '@components/Typography';

// Styles
import styles from './Feature.scss';

interface PropTypes {
  icon?: string;
  title: string;
}

const BillingCurrentFeature: React.FC<PropTypes> = ({
  icon = 'fas fa-check',
  title
}) => (
  <div className={styles.Root}>
    <Icon className={styles.Icon} icon={icon} variant="outlined" />
    <H5>{title}</H5>
  </div>
);

export default BillingCurrentFeature;
