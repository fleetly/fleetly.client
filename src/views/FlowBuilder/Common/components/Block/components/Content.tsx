import React from 'react';

// Styles
import styles from './Content.scss';

const FlowBuilderBlockContent: React.FC<{}> = ({ children }) => (
  <div className={styles.Root}>{children}</div>
);

export default FlowBuilderBlockContent;
