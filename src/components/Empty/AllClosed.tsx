import * as React from 'react';

// Styles
import styles from './AllClosed.scss';

const AllClosed = () => (
  <div className={styles.Root}>
    <div className={styles.Icon}>
      <i className="fal fa-check-circle fa-5x" />
    </div>
    <div className={styles.Title}>No Dialogs</div>
    <div className={styles.Text}>You have closed all open dialogs.</div>
  </div>
);

export default AllClosed;
