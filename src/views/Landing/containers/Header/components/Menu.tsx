import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Menu.scss';

const LandingHeaderMenu: React.FC<{}> = () => (
  <nav className={styles.Root} role="menu">
    <div className={styles.Item} role="menuitem">
      <Text bold className={styles.ItemTitle} component="div" size="large">
        Products
      </Text>
    </div>

    <div className={styles.Item} role="menuitem">
      <Text bold className={styles.ItemTitle} component="div" size="large">
        Integrations
      </Text>
    </div>

    <div className={styles.Item} role="menuitem">
      <Text bold className={styles.ItemTitle} component="div" size="large">
        Pricing
      </Text>
    </div>
  </nav>
);

export default LandingHeaderMenu;
