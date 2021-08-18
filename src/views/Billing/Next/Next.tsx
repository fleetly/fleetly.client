import moment from 'moment';
import React, { useCallback } from 'react';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import { Caption, H2, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// Constants
import { PLANS_MODAL } from '@constants';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Next.scss';

const BillingNext: React.FC<ISubscription> = ({ next, plan }) => {
  // Setup
  const { openModal } = useModals(PLANS_MODAL);

  // Handlers
  const handleBuyClick = useCallback(() => openModal(), [openModal]);

  return (
    <Wrapper title="Next Plan">
      <Card className={styles.Root}>
        <div className={styles.Header}>
          <H4 className={styles.Title}>{plan.type}</H4>

          <div>
            <Caption className={styles.Date}>from&nbsp;</Caption>
            <Caption bold>{moment(next?.billDate).format('Do MMM')}</Caption>
          </div>
        </div>

        <div className={styles.Content}>
          <div className={styles.Price}>
            <H2>${plan.price}</H2>
            <Text className={styles.Period}>/ month</Text>
          </div>

          <Text className={styles.Limit}>{plan.title}</Text>
        </div>

        <Button color="primary" fullWidth onClick={handleBuyClick}>
          Change Plan
        </Button>
      </Card>
    </Wrapper>
  );
};

export default BillingNext;
