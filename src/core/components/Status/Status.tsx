import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Status.scss';

// Utils
import { getClassName } from '@utils/styles';

interface Classes extends ExtendedClasses {
  dot?: string;
  title?: string;
}

interface PropTypes {
  className?: string;
  classes?: Classes;
  color?: Color;
  title?: string;
}

const Status: React.FC<PropTypes> = ({ classes, color, title }) => (
  <div
    className={classNames(
      classes?.root,
      styles.Root,
      getClassName('color', {
        collection: styles,
        value: color || 'blue'
      })
    )}
  >
    <div className={classNames(classes?.dot, styles.Dot)} />

    {title && (
      <div className={classNames(classes?.title, styles.Title)}>
        {title.toLowerCase()}
      </div>
    )}
  </div>
);

export default Status;
