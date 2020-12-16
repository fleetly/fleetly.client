import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Styles
import styles from './DialogTitle.scss';

const TitleDialog = () => (
  <div className={styles.Root}>
    <div className={styles.InfoBlock}>
      <Avatar />
      <div className={styles.Info}>
        <div className={styles.UserName}>Firstname Lastname</div>
        <div className={styles.Online}>Last online</div>
      </div>
    </div>

    <div className={styles.ActionBlock}>
      <Button
        className={styles.Icon}
        icon={'far fa-search'}
        variant="outlined"
      />
      <Button className={styles.Icon} icon={'far fa-bell'} variant="outlined" />
      <Button color="primary">Confirm</Button>
    </div>
  </div>
);

export default TitleDialog;
