import React from 'react';

// Components
import { Text } from '@components/Typography';
import Product from '../../components/Product';

// Data
import { PRODUCTS } from './Products.data';

// Styles
import styles from './Products.scss';

const LandingHeaderProducts: React.FC<{}> = () => (
  <div className={styles.Root}>
    {PRODUCTS.map(({ items, title }, index) => (
      <div className={styles.Category} key={index}>
        <Text bold className={styles.Title} size="large">
          {title}
        </Text>

        {items && items.length > 0 && (
          <div className={styles.List}>
            {(items as any).map((item: any, index: number) => (
              <Product {...item} key={index} />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default LandingHeaderProducts;
