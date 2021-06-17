import React from 'react';

// Components
import Button from '@components/Button';
import Card, { CardHeader, CardHr } from '@components/Card';
import Icon from '@components/Icon';
import { Wrapper } from '@components/Page';
import { Caption } from '@components/Typography';

import Feature from './components/Feature';
import Limit from './components/Limit';

// Styles
import styles from './Current.scss';

// TEST data
import TEST from '../data';

const BillingCurrent = ({ data }: any) => {
  const features = TEST?.CURRENT_PLAN?.plan?.features; // TEST
  const traffics = data?.traffics;
  const check = Array.isArray(traffics);

  return (
    <Wrapper classes={{ root: styles.Root }} title="Current Plan">
      <Card>
        <CardHeader
          actions={
            <Button color="primary" variant="outlined">
              Get Usage Report
            </Button>
          }
          avatar={<Icon icon="fab fa-vk" />}
          classes={{ content: styles.Content }}
          subTitle={data?.title}
          title={data?.type}
        />

        <CardHr />

        <div className={styles.Features}>
          {features.map(({ icon, title }: any, index: number) => (
            <Feature key={index} icon={icon} title={title} />
          ))}
        </div>

        <Caption className={styles.Title}>Trafic</Caption>

        <CardHr />

        <div className={styles.Limits}>
          {check &&
            traffics.map(({ id, ...props }: any) => (
              <Limit key={id} {...props} />
            ))}
        </div>
      </Card>
    </Wrapper>
  );
};

export default BillingCurrent;
