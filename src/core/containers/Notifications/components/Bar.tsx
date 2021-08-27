import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import { Caption, H5 } from '@components/Typography';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Bar.scss';
import { getClassName } from '@utils/styles';

const NotificationsBar: React.FC<Notifications.BarProps> = ({
  description,
  id,
  timeout,
  title,
  variant = 'info'
}) => {
  // Setup
  const { deleteNotification } = useNotifications(id);

  // ClassNames
  const { rootClassName, iconClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Root,
        getClassName('variant', { collection: styles, value: variant })
      ),
      iconClassName: classNames(styles.Icon, 'fas', {
        'fa-bell': variant === 'info',
        'fa-check': variant === 'success',
        'fa-exclamation': variant === 'alert',
        'fa-exclamation-triangle': variant === 'danger'
      })
    }),
    [variant]
  );

  // Effects
  React.useEffect(() => {
    timeout && setTimeout(deleteNotification, timeout);
  }, [deleteNotification, timeout]);

  // Handlers
  const handleClick = React.useCallback(() => deleteNotification(), [
    deleteNotification
  ]);

  return (
    <div className={rootClassName}>
      <i className={iconClassName} />

      <div className={styles.Info}>
        <H5 className={styles.Title} component="div">
          {title}
        </H5>

        {description && (
          <Caption className={styles.Description} component="div">
            {description}
          </Caption>
        )}
      </div>

      {!timeout && (
        <Button
          className={styles.Close}
          icon="fas fa-times"
          onClick={handleClick}
          variant="outlined"
        />
      )}

      {timeout && (
        <div
          className={styles.Countdown}
          style={{ animationDuration: `${timeout / 1000}s` }}
        />
      )}
    </div>
  );
};

export default NotificationsBar;
