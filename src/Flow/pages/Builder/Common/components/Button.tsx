import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface BuilderButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
}

export const BuilderButton: React.FC<BuilderButtonProps> = ({
  children,
  className,
  color = 'default',
  onClick
}) => (
  <button
    className={classNames(
      className,
      styles.Root,
      getClassName('color', { collection: styles, value: color })
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
