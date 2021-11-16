import React from 'react';

// Styles
import styles from './Content.scss';

export const BlockContent: React.FC<{}> = ({ children }) => (
  <div className={styles.Root}>{children}</div>
);
