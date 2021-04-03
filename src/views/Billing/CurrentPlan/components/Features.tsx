import classNames from 'classnames';
import React from 'react';

// Components
import { H5 } from '@components/Typography';

// Styles
import styles from './Features.scss';

interface PropTypes {
  icon: string;
  title: string;
}

const BillingCurrentPlanFeature: React.FC<PropTypes> = ({
  icon = 'fas fa-check',
  title
}: any) => (
  <div className={styles.Root}>
    <i className={classNames(styles.Icon, icon)} />
    <H5 className={styles.Title}>{title}</H5>
  </div>
);

export default BillingCurrentPlanFeature;
