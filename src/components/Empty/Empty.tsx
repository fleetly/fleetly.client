import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Empty.scss';

const Empty = ({ icon, text, title }: any) => (
  <div className={styles.Root}>
    <i className={classNames(styles.Icon, icon)} />
    <div className={styles.Title}>{title}</div>
    <div className={styles.Text}>{text}</div>
  </div>
);

export default Empty;
