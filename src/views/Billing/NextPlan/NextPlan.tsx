import moment from 'moment';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { Caption, H3, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// Styles
import styles from './NextPlan.scss';

const NextPlan = ({ data }: any) => (
  <Wrapper
    classes={{ container: styles.Container, root: styles.Root }}
    title="Next Plan"
  >
    <div className={styles.Header}>
      <H4 className={styles.Title}>{data?.plan?.type}</H4>
      <Text className={styles.Date}>
        <Caption className={styles.SubTitle}>from</Caption>{' '}
        {moment(data?.startDate).format('Do MMM')}
      </Text>
    </div>

    <H3 className={styles.Price}>20 $</H3>
    <Text className={styles.SubTitle}>per month</Text>

    <Text className={styles.Info}>For {data?.limits?.limit} Subscribers</Text>

    <Button color="primary">Change Plan</Button>
  </Wrapper>
);

export default NextPlan;
