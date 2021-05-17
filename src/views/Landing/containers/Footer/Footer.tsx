import React from 'react';

// Components
import Link from '@components/Link';
import { Text } from '@components/Typography';

import Wrapper from '@views/Landing/components/Wrapper';
import Social from './components/Social';

// Data
import { SOCIAL_LINKS } from './data';

// Styles
import styles from './Footer.scss';

const LandingFooter: React.FC<{}> = () => (
  <Wrapper
    classes={{ root: styles.Root, container: styles.Container }}
    component="footer"
  >
    <div className={styles.Social}>
      {SOCIAL_LINKS.map((item, index) => (
        <Social {...item} key={index} />
      ))}
    </div>

    <div className={styles.Links}>
      <Link className={styles.Link} to="/">
        <Text medium size="large">
          Terms of Service
        </Text>
      </Link>
      <Link className={styles.Link} to="/">
        <Text medium size="large">
          Privacy Policy
        </Text>
      </Link>
    </div>

    <Text
      className={styles.Copyright}
      medium
      size="large"
    >{`© ${new Date().getFullYear()} Fleetly. All rights reserved`}</Text>
  </Wrapper>
);

export default LandingFooter;
