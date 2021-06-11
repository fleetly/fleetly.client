import moment from 'moment';
import React, { useCallback } from 'react';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import { Caption, H2, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// Styles
import styles from './Next.scss';

const BillingNext: React.FC<any> = ({ data }) => {
  const handleClick = useCallback(() => {
    (window as any).Paddle.Checkout.open({
      email: 'ivan@fleetly.it',
      passthrough: JSON.stringify({
        companyId: '5f885f0df233641244c25477',
        subscriptionId: '60bc8ae3aa960e5364ebdac1',
        userId: '5f885ef019963f0aac8628d8'
      }),
      product: 11465
    });
  }, []);

  return (
    <Wrapper title="Next Plan">
      <Card className={styles.Root}>
        <div className={styles.Header}>
          <H4 className={styles.Title}>{data?.plan?.type}</H4>

          <Text className={styles.Date}>
            <Caption className={styles.DateStart}>from</Caption>{' '}
            {moment(data?.startDate).format('Do MMM')}
          </Text>
        </div>

        <div className={styles.Content}>
          <div className={styles.Price}>
            <H2 className={styles.Amount}>$200</H2>
            <Text className={styles.Period}>/ month</Text>
          </div>

          <Text className={styles.Limit}>
            For {data?.limits?.limit} Subscribers
          </Text>
        </div>

        <Button color="primary" fullWidth onClick={handleClick}>
          Change Plan
        </Button>
      </Card>
    </Wrapper>
  );
};

export default BillingNext;
