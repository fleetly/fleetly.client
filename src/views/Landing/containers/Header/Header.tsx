import React from 'react';

// Components
import Wrapper from '@views/Landing/components/Wrapper';

// Styles
import styles from './Header.scss';

const LandingHeader = () => (
  <Wrapper
    classes={{ root: styles.Root, container: styles.Container }}
    component="header"
  >
    123
  </Wrapper>
);

export default LandingHeader;
