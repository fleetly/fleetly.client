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
          <Text className={styles.Name} medium size="extraLarge">
            Welcome Fleetly!
          </Text>

          <Text bold className={styles.Status} size="large">
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
