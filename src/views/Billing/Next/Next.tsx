import moment from 'moment';
import React from 'react';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import { Caption, H2, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// Styles
import styles from './Next.scss';

const BillingNext: React.FC<any> = ({ data }) => (
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

      <Button color="primary" fullWidth>
        Change Plan
      </Button>
    </Card>
  </Wrapper>
);

export default BillingNext;
