import * as React from 'react';

// Styles
import styles from './OpenDialog.scss';

const OpenDialog = () => (
  <div className={styles.Root}>
    <div className={styles.Icon}>
      <i class="fal fa-comments-alt fa-5x" />
    </div>
    <div className={styles.Title}>Open Dialog</div>
    <div className={styles.Text}>
      Be careful, the wrong key can stop the channel.
    </div>
  </div>
);

export default OpenDialog;
