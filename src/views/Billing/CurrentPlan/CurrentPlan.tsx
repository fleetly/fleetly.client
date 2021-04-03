import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { CardHeader } from '@components/Card';
import { Caption } from '@components/Typography';
import Features from './components/Features';
import Limit from './components/Limit';
import { Wrapper } from '@components/Page';

// Styles
import styles from './CurrentPlan.scss';

const CurrentPlan = ({ data }: any) => {
  const features = data?.plan?.features;

  return (
    <Wrapper classes={{ root: styles.Root }} title="Current Plan">
      <CardHeader
        actions={
          <Button color="primary" variant="outlined">
            Get Usage Report
          </Button>
        }
        avatar={<i className={classNames(styles.Icon, 'fab fa-vk')} />}
        classes={{ root: styles.Header, content: styles.Content }}
        subTitle={data?.plan?.description}
        title={data?.plan?.title}
      />

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
    </Wrapper>
  );
};

export default CurrentPlan;
