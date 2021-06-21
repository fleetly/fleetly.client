import React from 'react';

// Assets
import logoImg from '@assets/logo.svg';

// Components
import { H3 } from '@components/Typography';

import Button from '@views/Landing/components/Button';
import Wrapper from '@views/Landing/components/Wrapper';

// Containers
import Menu from './containers/Menu';

// Styles
import styles from './Header.scss';
import routes from '@routes';

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
      <Button to={routes.SIGN.UP} variant="orange">
        Try Free
      </Button>

      <Button to={routes.SIGN.IN} variant="green">
        Sign In
      </Button>
    </div>
  </Wrapper>
);

export default LandingHeader;
