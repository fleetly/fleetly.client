import * as React from 'react';

// Styles
import styles from './Empty.scss';

const Empty = ({ icon, text, title }: any) => (
  <div className={styles.Root}>
    <div className={styles.Icon}>
      <i className={icon} />
    </div>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Text}>{text}</div>
  </div>
);

export default Empty;
