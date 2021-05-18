import React, { useMemo } from 'react';

// Components
import Link from '@components/Link';
import { Text } from '@components/Typography';

// Styles
import styles from './Button.scss';

type Variant = 'green' | 'orange' | 'orangeWhite';

interface PropTypes {
  to?: string;
  variant?: Variant;
}

const LandingButton: React.FC<PropTypes> = ({
  children,
  to,
  variant = 'orangeWhite'
}) => {
  const Component = useMemo(
    () => (props: any) =>
      to ? <Link {...props} to={to} /> : <button {...props} />,
    [to]
  );

  return (
    <div className={styles.Background}>
      <div className={styles.Cover}>
        <Component className={styles.Root}>
          <Text className={styles.Text} bold size="large">
            {children}
          </Text>
        </Component>
      </div>
    </div>
  );
};

export default LandingButton;
