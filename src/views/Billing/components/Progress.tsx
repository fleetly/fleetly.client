import * as React from 'react';

// Styles
import styles from './Progress.scss';

const Progress = ({ limit, value }: any) => {
  const progress = (value / limit) * 100;

  return (
    <div className={styles.Root}>
      <div className={styles.Scale} />
      <div className={styles.Progress} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progress;
