import classNames from 'classnames';
import React from 'react';

// Components
import { Caption, H5 } from '@components/Typography';

// Styles
import styles from './Badge.scss';

// Utils
import { getClassName } from '@utils/styles';

interface Classes extends ExtendedClasses {
  content?: string;
  description?: string;
  icon?: string;
  title?: string;
}

interface PropTypes {
  classes?: Classes;
  color?: Color;
  description?: string;
  icon?: string;
  title?: string;
}

const Badge: React.FC<PropTypes> = ({
  classes = {},
  color,
  description,
  icon = 'far fa-bell',
  title
}) => (
  <div
    className={classNames(
      classes.root,
      styles.Root,
      getClassName('color', {
        collection: styles,
        value: color || 'blue'
      })
    )}
  >
    <i className={classNames(classes.icon, styles.Icon, icon)} />

    <div className={classNames(classes.content, styles.Content)}>
      <H5 className={classNames(classes.title, styles.Title)}>{title}</H5>

      {description && (
        <Caption
          className={classNames(classes.description, styles.Description)}
        >
          {description}
        </Caption>
      )}
    </div>
  </div>
);

export default Badge;
