import React from 'react';

// Components
import { H1, H2, Text } from '@components/Typography';

import Button from '../../components/Button';
import Wrapper from '../../components/Wrapper';

// Containers
import Phone from './containers/Phone';

// Hooks
import { useResponsive } from '@hooks/responsive';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Styles
import styles from './Intro.scss';

const LandingIntro = () => {
  const { isDesktop } = useResponsive();

  return (
    <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
      <div className={styles.Cover}>
        <div className={styles.Blue} />
        <div className={styles.Background} />
      </div>

      <div className={styles.Content}>
        <H2 weight="extraBold">Increase Your Business</H2>
        <H1 noWrap weight="extraBold">
          With Fleetly
        </H1>

        <Text
          className={styles.Description}
          component="div"
          size="large"
          weight="medium"
        >
          Combine channels and&nbsp;automate communication with&nbsp;subscribers
          to&nbsp;grow your business
        </Text>

        <div className={styles.Actions}>
          <Button to={SIGN_ROUTES.UP}>Try for Free</Button>
        </div>
      </div>

      {isDesktop && (
        <div className={styles.Phone}>
          <Phone />
        </div>
      )}
    </Wrapper>
  );
};

export default LandingIntro;
