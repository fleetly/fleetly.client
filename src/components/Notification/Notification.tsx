import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Notification.scss';

// Utils
import { getClassName } from '@utils/styles';

// Components
import Button from '@components/Button';
import { Caption, H5 } from '@components/Typography';

const Notification: React.FC<any> = ({ description, title }) => (
  <div className={styles.Root}>
    <div className={styles.Icon} />
    <div className={styles.Info}>
      <H5 className={styles.Title} component="div">
        {title}
      </H5>

      <Caption className={styles.Description} component="div">
        {description}
      </Caption>
    </div>
    <div className={styles.Actions}>
      <Button icon="fas fa-times" variant="outlined" />
    </div>
  </div>
);

export default Notification;
