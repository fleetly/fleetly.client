import classNames from 'classnames';
import React, { useMemo } from 'react';

// Components
import Link from '@components/Link';
import { Text } from '@components/Typography';

// Styles
import styles from './Button.scss';

type Variant = 'green' | 'orange' | 'orangeWhite';

interface PropTypes {
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  to?: string;
  variant?: Variant;
}

const LandingButton: React.FC<PropTypes> = ({
  children,
  onClick,
  to,
  variant = 'orangeWhite',
  ...props
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
              onClick={onClick}
              {...props}
            >
              <Text className={styles.Text} size="large" weight="bold">
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
                onClick={onClick}
                {...props}
              >
                <Text className={styles.Text} size="large" weight="bold">
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
            {...props}
            className={classNames(styles.Root, styles.RootVariantGreen)}
            onClick={onClick}
          >
            <Text className={styles.Text} size="large" weight="bold">
              {children}
            </Text>
          </Component>
        );
    }
  }, [children, onClick, props, variant]);
};

export default LandingButton;
