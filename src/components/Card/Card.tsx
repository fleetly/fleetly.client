import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Card.scss';

interface PropTypes {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<PropTypes> = ({ children, className }) => (
  <div className={classNames(className, styles.Root)}>{children}</div>
);

export default Card;
