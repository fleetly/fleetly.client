import React from 'react';

// Components
import { Text } from '@components/Typography';

// Containers
import Integrations from '../../Integrations';
import Products from '../../Products';

// Styles
import styles from './Menu.desktop.scss';

const LandingHeaderMenu: React.FC<{}> = () => (
  <nav className={styles.Root} role="menu">
    <div className={styles.Item} role="menuitem">
      <div className={styles.Control}>
        <Text bold className={styles.ItemTitle} component="div" size="large">
          Products
        </Text>
      </div>

      <div className={styles.Dropdown}>
        <Products />
      </div>
    </div>

    <div className={styles.Item} role="menuitem">
      <div className={styles.Control}>
        <Text bold className={styles.ItemTitle} component="div" size="large">
          Integrations
        </Text>
      </div>

      <div className={styles.Dropdown}>
        <Integrations />
      </div>
    </div>

    <div className={styles.Item} role="menuitem">
      <div className={styles.Control}>
        <Text bold className={styles.ItemTitle} component="div" size="large">
          Pricing
        </Text>
      </div>
    </div>
  </nav>
);

export default LandingHeaderMenu;
