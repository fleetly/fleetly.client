import moment from 'moment';
import React, { useCallback } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import Image from '@components/Image';
import Link from '@components/Link';
import { Caption, H2, H4, Text } from '@components/Typography';

// Components
import { Wrapper } from '@components/Page';

// Constants
import { PLANS_MODAL } from '@constants';

// Data
import { PLANS_IMAGE_SET } from '@containers/Plans/Plans.data';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Next.scss';

// Utils
import { formatCurrency } from '@utils/string';

export const BillingNext: React.FC<ISubscription> = ({
  cancelDate,
  next,
  plan,
  updateUrl
}) => {
  // Setup
  const { openModal } = useModals(PLANS_MODAL);

  const isCanceled = !!cancelDate;
  const isLite = plan.type === PlanType.LITE;

  // Handlers
  const handleBuyClick = useCallback(() => openModal(), [openModal]);

  return (
    <Wrapper title="Next Plan">
      <Card className={styles.Root}>
        {isLite ? (
          <>
            <div className={styles.Cover}>
              <Image
                className={styles.Image}
                src={PLANS_IMAGE_SET.ENTERPRICE['1x']}
                srcSet={PLANS_IMAGE_SET.ENTERPRICE}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.Header}>
              <H4 className={styles.Title}>{plan.type}</H4>

              <div>
                <Caption className={styles.Date}>{`${
                  cancelDate ? 'begins' : 'next due'
                } `}</Caption>

                <Caption weight="bold">
                  {moment(isCanceled ? cancelDate : next?.billDate).format(
                    'Do MMM'
                  )}
                </Caption>
              </div>
            </div>

            <div className={styles.Content}>
              {cancelDate ? (
                <H2>Free</H2>
              ) : (
                <div className={styles.Price}>
                  <H2>{formatCurrency(plan.price)}</H2>
                  <Text className={styles.Period}>/ month</Text>
                </div>
              )}

              <Text className={styles.Limit}>{plan.title}</Text>
            </div>
          </>
        )}

        <div className={styles.Actions}>
          <Button color="primary" fullWidth onClick={handleBuyClick}>
            {isCanceled || isLite ? 'Upgrade to PRO' : 'Change Plan'}
          </Button>

          {updateUrl && (
            <Link className={styles.Method} to={updateUrl}>
              <i className="fa far fa-credit-card" />
              Update payment method
            </Link>
          )}
        </div>
      </Card>
    </Wrapper>
  );
};
