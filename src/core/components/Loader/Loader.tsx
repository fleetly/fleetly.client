import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Loader.scss';

export interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div className={classNames(className, styles.Root)}>
    <i className={classNames(styles.Icon, 'fas fa-spinner-third')} />
  </div>
);

export default Loader;
