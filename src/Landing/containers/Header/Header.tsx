import React from 'react';

// Assets
import logoImg from '@assets/logo.svg';

// Components
import { H3 } from '@components/Typography';

import Button from 'Landing/components/Button';
import Wrapper from 'Landing/components/Wrapper';

// Containers
import Menu from './containers/Menu';

// Routes
import { SIGN_ROUTES } from '@sign/Sign.routes';

// Styles
import styles from './Header.scss';

const LandingHeader = () => (
  <Wrapper
    classes={{ root: styles.Root, container: styles.Container }}
    component="header"
  >
    <div className={styles.Left}>
      <img alt="Fleetly" className={styles.Logo} src={logoImg} />
      <H3 className={styles.Title}>Fleetly</H3>
    </div>

    <Menu />

    <div className={styles.Actions}>
      <Button to={SIGN_ROUTES.UP} variant="orange">
        Try Free
      </Button>

      <Button to={SIGN_ROUTES.IN} variant="green">
        Sign In
      </Button>
    </div>
  </Wrapper>
);

export default LandingHeader;
