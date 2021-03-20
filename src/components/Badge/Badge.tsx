import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import classNames from 'classnames';

// Components
import { Caption, H5 } from '@components/Typography';

//Styles
import styles from './Badge.scss';

// Utils
import { getClassName } from '@utils/styles';

const Badge: React.FC<Flow.Badge> = ({
  color,
  description,
  icon = 'far fa-bell',
  title
}) => {
  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color || Color.BLUE
        })
      )
    }),
    [color]
  );

  return (
    <div className={rootClassName}>
      <i className={classNames(styles.Icon, icon)} />

      <div className={styles.Info}>
        <H5 className={styles.Title}>{title}</H5>

        {description && (
          <Caption className={styles.Description}>{description}</Caption>
        )}
      </div>
    </div>
  );
};

export default Badge;
