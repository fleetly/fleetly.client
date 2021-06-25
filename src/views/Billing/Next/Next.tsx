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
import { ISubscription } from '@interfaces/subscription.interface';
import { IUser } from '@interfaces/user.interface';

// Styles
import styles from './Next.scss';

const BillingNext: React.FC<ISubscription> = ({ id, next, plan }) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ user: IUser }>(GET_USER);

  // Handlers
  const handleClick = useCallback(() => {
    data?.user.id &&
      id &&
      (window as any).Paddle.Checkout.open({
        email: 'ivan@fleetly.it',
        passthrough: JSON.stringify({
          companyId,
          subscriptionId: id,
          userId: data.user.id
        }),
        product: 11465
      });
  }, [companyId, data, id]);

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

        <Button color="primary" fullWidth onClick={handleClick}>
          Change Plan
        </Button>
      </Card>
    </Wrapper>
  );
};

export default BillingNext;
