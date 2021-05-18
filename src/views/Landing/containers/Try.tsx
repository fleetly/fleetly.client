import React from 'react';

// Components
import { H3, Text } from '@components/Typography';

import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Try.scss';

const LandingTry: React.FC<{}> = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
    <div className={styles.Content}>
      <Text className={styles.Description} medium size="large">
        Building bots with fun, no code
      </Text>

      <H3 className={styles.Title} extraBold>
        Try your best customer
        <br />
        communication experience
      </H3>

      <div className={styles.Actions}>
        <Button to={ROUTES.SIGN.UP}>Try for Free</Button>
      </div>
    </div>
  </Wrapper>
);

export default LandingTry;
