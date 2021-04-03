import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { Caption, H5 } from '@components/Typography';
import Features from './components/Features';
import Limit from './components/Limit';
import { Wrapper } from '@components/Page';

// Styles
import styles from './CurrentPlan.scss';

const CurrentPlan = ({ data }: any) => {
  const features = data?.plan?.features;

  return (
    <Wrapper title="Current Plan">
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

        <div className={styles.Features}>
          {features.map(({ icon, title }: any) => (
            <Features icon={icon} title={title} />
          ))}
        </div>

        <Caption className={styles.Title}>Trafic</Caption>
        <Limit
          limit={data?.limits?.limit}
          title={data?.limits?.title}
          unit={data?.limits?.unit}
          unitPrice={data?.limits?.unitPrice}
          value={data?.limits?.value}
        />
      </div>
    </Wrapper>
  );
};

export default CurrentPlan;
