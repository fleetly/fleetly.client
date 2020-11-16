import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Notification.scss';

// Utils
import { getClassName } from '@utils/styles';

// Components
import Button from '@components/Button';
import { Caption, H4, H5, P } from '@components/Typography';

const Notification: React.FC<any> = ({ description, title = 'Fleetly' }) => (
  <P className={styles.Root} component="div">
    <P className={styles.Icon} component="div" children />

    <H4 className={styles.Info} component="div">
      <H5 className={styles.Title} component="div">
        {(title = 'Notification system')}
      </H5>

      <Caption className={styles.Description} component="div">
        {
          (description =
            'Also on Fleetly you need to add pop-up notifications in any corner.')
        }
      </Caption>
    </H4>

    <P className={styles.Actions} component="div">
      <Button icon="fas fa-times" variant="outlined" />
    </P>
  </P>
);

export default Notification;
