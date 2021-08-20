import React from 'react';

// Components
import { Text } from '@components/Typography';
import Product from '../components/Product';

// Data
import { INTEGRATIONS } from '../Header.data';

// Styles
import styles from './Common.scss';

const LandingHeaderIntegrations: React.FC<{}> = () => (
  <div className={styles.Root}>
    {INTEGRATIONS.map(({ items, title }, index) => (
      <div key={index}>
        <Text className={styles.Title} size="large" weight="bold">
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

export default LandingHeaderIntegrations;
