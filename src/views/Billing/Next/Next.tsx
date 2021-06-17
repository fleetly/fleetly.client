import moment from 'moment';
import React, { useCallback } from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import { Caption, H2, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// GraphQL
import GET_USER from '@graphql/getUserById.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Styles
import styles from './Next.scss';

const BillingNext: React.FC<any> = ({
  billDate = new Date(),
  price = '200',
  title = 'For 10000 subscribers',
  type = 'PRO'
}) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ user: IUser }>(GET_USER);

  // Handlers
  const handleClick = useCallback(() => {
    data?.user.id &&
      (window as any).Paddle.Checkout.open({
        email: 'ivan@fleetly.it',
        passthrough: JSON.stringify({
          companyId,
          subscriptionId: '60c624b7a6156e2ec086f10a',
          userId: data.user.id
        }),
        product: 11465
      });
  }, [companyId, data]);

  return (
    <Wrapper title="Next Plan">
      <Card className={styles.Root}>
        <div className={styles.Header}>
          <H4 className={styles.Title}>{type}</H4>

          <Text className={styles.Date}>
            <Caption className={styles.DateStart}>from</Caption>{' '}
            {moment(billDate).format('Do MMM')}
          </Text>
        </div>

        <div className={styles.Content}>
          <div className={styles.Price}>
            <H2 className={styles.Amount}>${price}</H2>
            <Text className={styles.Period}>/ month</Text>
          </div>

          <Text className={styles.Limit}>{title}</Text>
        </div>

        <Button color="primary" fullWidth onClick={handleClick}>
          Change Plan
        </Button>
      </Card>
    </Wrapper>
  );
};

export default BillingNext;
