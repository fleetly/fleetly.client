import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Status.scss';

// Utils
import { getClassName } from '@utils/styles';

const Status: React.FC<Status.Props> = ({ classes, color, title }) => {
  const { rootClassName, dotClassName, titleClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(
        classes?.root,
        styles.Root,
        getClassName('color', {
          collection: styles,
          value: color || Color.BLUE
        })
      ),
      dotClassName: classNames(classes?.dot, styles.Dot),
      titleClassName: classNames(classes?.title, styles.Title)
    }),
    [classes, color]
  );

  return (
    <div className={rootClassName}>
      <div className={dotClassName} />
      {title && <div className={titleClassName}>{title.toLowerCase()}</div>}
    </div>
  );
};

export default Status;
