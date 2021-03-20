import { Color } from '@fleetly/common/dist/enums';
import * as React from 'react';
import classNames from 'classnames';

//Styles
import styles from './Badge.scss';

// Utils
import { getClassName } from '@utils/styles';

const Badge: React.FC<Flow.Badge> = ({ color, description, icon = 'far fa-bell', title }) => {
  const {rootClassName} = React.useMemo(() => ({
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
    <div className={rootClassName} >

      <i className={classNames(
        styles.Icon,
        `${icon}`
        )} />

      <div className={styles.Info}>
        <div className={styles.Title} title={title}>
          {title}
        </div>

        {description &&
          <div className={styles.Description}>
            {description}
          </div>
        }
      </div>
    </div>
  );
};

export default Badge;
