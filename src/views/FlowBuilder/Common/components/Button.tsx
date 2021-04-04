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
}

const FlowBuilderButton: React.FC<PropTypes> = ({
  children,
  className,
  color = 'default'
}) => (
  <button
    className={classNames(
      className,
      styles.Root,
      getClassName('color', { collection: styles, value: color })
    )}
    type="button"
  >
    {children}
  </button>
);

export default FlowBuilderButton;
