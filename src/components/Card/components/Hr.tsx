import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Hr.scss';

interface PropTypes {
  className?: string;
}

const CardHr: React.FC<PropTypes> = ({ className }) => (
  <hr className={classNames(className, styles.Root)} />
);

export default CardHr;
