import React from 'react';

// Components
import { H1, H2, Text } from '@components/Typography';
import { Button, Wrapper } from '../Common';

// Styles
import styles from './Intro.scss';

const LandingIntro = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
    <div className={styles.Cover}>
      <div className={styles.Blue} />
      <div className={styles.Background} />
    </div>

    <div className={styles.Content}>
      <H2>Increase Your Busines</H2>
      <H1>With Fleetly</H1>

      <Text className={styles.Description} component="div">
        Combine channels and&nbsp;automate communication with&nbsp;subscribers
        to&nbsp;grow your business
      </Text>

      <div className={styles.Actions}>
        <Button>Try for Free</Button>
      </div>
    </div>
  </Wrapper>
);

export default LandingIntro;
