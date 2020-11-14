import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Loader.scss';

const Loader: React.FC<{}> = () => {
  const { iconClassName } = React.useMemo(
    () => ({ iconClassName: classNames(styles.Icon, 'fas fa-spinner-third') }),
    []
  );

  return (
    <div className={styles.Root}>
      <i className={iconClassName} />
    </div>
  );
};

export default Loader;
