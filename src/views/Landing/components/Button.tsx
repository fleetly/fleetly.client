import classNames from 'classnames';
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

  return useMemo(() => {
    switch (variant) {
      case 'orange':
        return (
          <div className={classNames(styles.Cover, styles.CoverSizeSmall)}>
            <Component
              className={classNames(styles.Root, styles.RootVariantOrange)}
            >
              <Text className={styles.Text} bold size="large">
                {children}
              </Text>
            </Component>
          </div>
        );
      case 'orangeWhite':
        return (
          <div className={styles.Background}>
            <div className={styles.Cover}>
              <Component
                className={classNames(
                  styles.Root,
                  styles.RootVariantOrangeWhite
                )}
              >
                <Text className={styles.Text} bold size="large">
                  {children}
                </Text>
              </Component>
            </div>
          </div>
        );
      case 'green':
      default:
        return (
          <Component
            className={classNames(styles.Root, styles.RootVariantGreen)}
          >
            <Text className={styles.Text} bold size="large">
              {children}
            </Text>
          </Component>
        );
    }
  }, [children, variant]);
};

export default LandingButton;
