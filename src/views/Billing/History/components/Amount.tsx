import React from 'react';

// Components
import { Caption, Text } from '@components/Typography';

// Styles
import styles from './Amount.scss';

// Utils
import { formatCurrency } from '@utils/string';

const BillingHistoryAmount: React.FC<any> = ({ amount, tax }) => (
  <div className={styles.Root}>
    <Text bold>{formatCurrency(amount)}</Text>
    <Caption className={styles.Tax}>{`${formatCurrency(tax)} (VAT)`}</Caption>
  </div>
);

export default BillingHistoryAmount;
