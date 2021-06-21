import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Product.scss';

interface LandingHeaderProductProps {
  description?: string;
  disabled?: boolean;
  icon?: string;
  logo?: string;
  title: string;
}

const LandingHeaderProduct: React.FC<LandingHeaderProductProps> = ({
  description,
  disabled,
  logo,
  title
}) => (
  <div
    className={classNames(styles.Root, { [styles.RootIsDisabled]: disabled })}
  >
    {logo && <img alt={title} className={styles.Logo} src={logo} />}

    <div className={styles.Info}>
      <Text bold className={styles.Title} size="large">
        {title}
      </Text>

      {description && <Text>{description}</Text>}
    </div>
  </div>
);

export default LandingHeaderProduct;
