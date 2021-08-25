import moment from 'moment';
import React from 'react';

// Components
import Badge from '@components/Badge';
import Loader from '@components/Loader';
import Modal from '@components/Modal';
import { Text } from '@components/Typography';

import Plan from './Item';

// Constants
import { PLANS_MODAL } from '@constants';

// Hooks
import { usePlansContainer } from './Plans.hooks';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';

// Styles
import styles from './Plans.scss';

export interface PlansProps {
  subscription?: ISubscription;
}

const Plans: React.FC<PlansProps> = ({ subscription }) => {
  const { handleClick, loading, plans } = usePlansContainer(subscription);

  return (
    <Modal
      classes={{
        backdrop: styles.Backdrop,
        container: styles.Container
      }}
      id={PLANS_MODAL}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.Root}>
          {plans && plans.length > 0 && (
            <div className={styles.Plans}>
              {plans.map((plan) => (
                <Plan
                  {...plan}
                  key={plan.type}
                  onClick={handleClick}
                  subscription={subscription}
                />
              ))}
            </div>
          )}

          {subscription?.cancelDate && (
            <Badge
              className={styles.Badge}
              color="orange"
              icon="far fa-exclamation-triangle"
              title="Discard subscription"
            >
              You already have a subscription that will end on{' '}
              <Text weight="bold">{moment(new Date()).format('DD MMMM')}</Text>.
              When buying a new subscription, the current one will be completed.
            </Badge>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Plans;
