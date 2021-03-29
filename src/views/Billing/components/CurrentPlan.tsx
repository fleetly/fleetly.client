import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { H5 } from '@components/Typography';
import Features from './Features';
import Trafic from './Trafic';

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
          <Features icon={icon} title={title} />
        ))}
      </div>

      <Trafic
        limit={data?.limits?.limit}
        unitPrice={data?.limits?.unitPrice}
        value={data?.limits?.value}
      />
    </div>
  );
};

export default CurrentPlan;
