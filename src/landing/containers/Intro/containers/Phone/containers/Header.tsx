import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Header.scss';

const LandingIntroPhoneHeader = () => (
  <div className={styles.Root}>
    <div className={styles.Monobrow}>
      <div className={styles.Speaker} />
    </div>

    <div className={styles.Container}>
      <div className={styles.User}>
        <div className={styles.Avatar}>
          <div className={styles.AvatarImage} />
        </div>

        <div className={styles.Info}>
          <Text className={styles.Name} size="extraLarge" weight="medium">
            Welcome Fleetly!
          </Text>

          <Text className={styles.Status} size="large" weight="bold">
            <div className={styles.Dots}>
              <div className={styles.Dot} />
              <div className={styles.Dot} />
              <div className={styles.Dot} />
            </div>
            TYPING
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default LandingIntroPhoneHeader;
