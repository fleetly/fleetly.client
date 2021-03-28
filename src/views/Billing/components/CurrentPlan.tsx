import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { Caption, H4, H5 } from '@components/Typography';

// Styles
import styles from './CurrentPlan.scss';

const CurrentPlan = ({ data }: any) => {
  const features = data?.plan?.features;

  return (
    <div className={styles.Root}>
      <div className={styles.Info}>
        <div className={styles.Subscription}>
          <i className={classNames(styles.Icon, 'fab fa-vk')} />
          <div className={styles.Description}>
            <H5>{data?.plan?.title}</H5>
            <div className={styles.DescriptionInfo}>
              {data?.plan?.description}
            </div>
          </div>
        </div>

        <Button color="primary" variant="outlined">
          Get Usage Report
        </Button>
      </div>

      <div className={styles.Container}>
        {features.map(({ icon, title }: any) => (
          <div className={styles.Features}>
            <i className={classNames(styles.FeaturesItem, icon)} />
            <H5 className={styles.FeaturesTitle}>{title}</H5>
          </div>
        ))}
      </div>

      <div className={styles.Plan}>
        <Caption className={styles.PlanTitle}>Trafic</Caption>
        <div className={styles.PlanInfo}>
          <div className={styles.PlanInfoTitle}>
            <H5>Subscribers</H5>
            <div className={styles.PlanInfoLimit}>
              {data?.limits?.value} of {data?.limits?.limit}
            </div>
          </div>

          <div>{data?.limits?.unitPrice}$ per subscriber</div>
        </div>

        <div className={styles.Progress}>
          <progress
            className={styles.ProgressInfo}
            max={data?.limits?.limit}
            value={data?.limits?.value}
          />
          <H4 className={styles.ProgressPrice}>{data?.limits?.unitPrice}$</H4>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
