import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Product.scss';

// Utils
import { getClassName } from '@utils/styles';

type Variant = 'integration' | 'product';

interface LandingHeaderProductProps {
  description?: string;
  disabled?: boolean;
  logo?: string;
  title: string;
  variant: Variant;
}

const LandingHeaderProduct: React.FC<LandingHeaderProductProps> = ({
  description,
  disabled,
  logo,
  title,
  variant = 'integration'
}) => (
  <div
    className={classNames(
      styles.Root,
      getClassName('variant', { collection: styles, value: variant }),
      { [styles.RootIsDisabled]: disabled }
    )}
  >
    {logo && <img alt={title} className={styles.Logo} src={logo} />}

    <div className={styles.Info}>
      <Text className={styles.Title} size="large" weight="bold">
        {title}
      </Text>

      {description && (
        <Text className={styles.Description} weight="medium">
          {description}
        </Text>
      )}
    </div>
  </div>
);

export default LandingHeaderProduct;
