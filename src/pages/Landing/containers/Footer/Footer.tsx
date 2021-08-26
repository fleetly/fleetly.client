import React from 'react';

// Components
import Link from '@components/Link';
import { Text } from '@components/Typography';

import Wrapper from '@pages/Landing/components/Wrapper';
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
      <Link
        className={styles.Link}
        to="https://app.termly.io/document/terms-of-use-for-website/39452092-d91a-4396-9ec4-e207df253d0c"
      >
        <Text size="large" weight="medium">
          Terms of Service
        </Text>
      </Link>

      <Link
        className={styles.Link}
        to="https://www.iubenda.com/privacy-policy/35742426/full-legal"
      >
        <Text size="large" weight="medium">
          Privacy Policy
        </Text>
      </Link>
    </div>

    <Text
      className={styles.Copyright}
      size="large"
      weight="medium"
    >{`© ${new Date().getFullYear()} Fleetly. All rights reserved`}</Text>
  </Wrapper>
);

export default LandingFooter;
