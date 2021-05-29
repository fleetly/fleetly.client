import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
}

const FlowBuilderButton: React.FC<PropTypes> = ({
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

export default FlowBuilderButton;
