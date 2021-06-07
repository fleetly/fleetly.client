import React from 'react';

// Components
import { H1, H2, Text } from '@components/Typography';

import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Intro.scss';

const LandingIntro = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
    <div className={styles.Cover}>
      <div className={styles.Blue} />
      <div className={styles.Background} />
    </div>

    <div className={styles.Content}>
      <H2 extraBold>Increase Your Business</H2>
      <H1 extraBold noWrap>
        With Fleetly
      </H1>

      <Text className={styles.Description} component="div">
        Combine channels and&nbsp;automate communication with&nbsp;subscribers
        to&nbsp;grow your business
      </Text>

      <div className={styles.Actions}>
        <Button to={ROUTES.SIGN.UP}>Try for Free</Button>
      </div>
    </div>
  </Wrapper>
);

export default LandingIntro;
