import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Icon.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface IconProps {
  className?: string;
  color?: Color;
  icon: string;
  variant?: 'filled' | 'outlined';
}

const Icon: React.FC<IconProps> = ({
  className,
  color = 'blue',
  icon,
  variant = 'filled'
}) => (
  <i
    className={classNames(
      className,
      styles.Root,
      icon,
      getClassName('color', { collection: styles, value: color }),
      getClassName('variant', { collection: styles, value: variant })
    )}
  />
);

export default Icon;
