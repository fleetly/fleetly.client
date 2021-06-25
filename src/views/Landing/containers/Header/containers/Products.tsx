import classNames from 'classnames';
import React from 'react';

// Components
import Product from '../components/Product';

// Data
import { PRODUCTS } from '../Header.data';

// Styles
import styles from './Common.scss';

const LandingHeaderProducts: React.FC<{}> = () => (
  <div className={classNames(styles.Root, styles.RootVariantProducts)}>
    {PRODUCTS.map((item: any, index: number) => (
      <div className={styles.Item} key={index}>
        <Product {...item} variant="product" />
      </div>
    ))}
  </div>
);

export default LandingHeaderProducts;
