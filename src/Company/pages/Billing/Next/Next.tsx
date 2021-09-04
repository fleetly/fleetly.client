import moment from 'moment';
import React, { useCallback, useMemo } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import Button from '@components/Button';
import Card from '@components/Card';
import Image from '@components/Image';
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
  endDate,
  next,
  plan,
  startDate
}) => {
  // Setup
  const { openModal } = useModals(PLANS_MODAL);

  // Memo
  const isDisabled = useMemo(() => moment().diff(startDate, 'minutes') < 1, [
    startDate
  ]);

  // Handlers
  const handleBuyClick = useCallback(() => openModal(), [openModal]);

  return (
    <Wrapper title="Next Plan">
      <Card className={styles.Root}>
        {plan.type === PlanType.LITE ? (
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
                <Caption className={styles.Date}>
                  {next.price ? 'next due ' : 'ends on '}
                </Caption>

                <Caption weight="bold">
                  {moment(endDate).format('Do MMM')}
                </Caption>
              </div>
            </div>

            <div className={styles.Content}>
              {next.price ? (
                <div className={styles.Price}>
                  <H2>{formatCurrency(next.price)}</H2>
                  <Text className={styles.Period}>/ month</Text>
                </div>
              ) : (
                <H2>Free</H2>
              )}

              <Text className={styles.Limit}>{next?.plan.title}</Text>
            </div>
          </>
        )}

        <div className={styles.Actions}>
          <Button
            color="blue"
            disabled={isDisabled}
            fullWidth
            onClick={handleBuyClick}
          >
            {plan.type === PlanType.LITE || next.plan.type === PlanType.LITE
              ? 'Upgrade to PRO'
              : 'Change Plan'}
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};
