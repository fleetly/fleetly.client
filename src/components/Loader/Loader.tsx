import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Loader.scss';

const Loader: React.FC<{}> = () => (
  <div className={styles.Root}>
    <i className={classNames(styles.Icon, 'fas fa-spinner-third')} />
  </div>
);

export default Loader;
