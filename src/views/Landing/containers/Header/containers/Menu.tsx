import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Containers
import Products from './Products';

// Styles
import styles from './Menu.scss';

const LandingHeaderMenu: React.FC<{}> = () => (
  <nav className={styles.Root} role="menu">
    <div
      className={classNames(styles.Item, styles.ItemProducts)}
      role="menuitem"
    >
      <Text bold className={styles.ItemTitle} component="div" size="large">
        Products
      </Text>

      <div className={styles.Products}>
        <Products />
      </div>
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
