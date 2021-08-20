import classNames from 'classnames';
import React from 'react';

// Components
import Icon from '@components/Icon';
import { Text } from '@components/Typography';

// Styles
import styles from './Badge.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface BadgeClasses extends ExtendedClasses {
  content?: string;
  description?: string;
  icon?: string;
  title?: string;
}

export interface BadgeProps {
  className?: string;
  classes?: BadgeClasses;
  color?: Color;
  description?: string;
  icon?: string;
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  classes = {},
  color,
  description,
  icon = 'far fa-bell',
  title
}) => (
  <div
    className={classNames(
      className,
      classes.root,
      styles.Root,
      getClassName('color', {
        collection: styles,
        value: color || 'blue'
      })
    )}
  >
    <Icon color={color} icon={icon} />

    <div className={classNames(classes.content, styles.Content)}>
      <Text
        className={classNames(classes.title, styles.Title)}
        size="large"
        weight="bold"
      >
        {title}
      </Text>

      {(children || description) && (
        <Text
          className={classNames(classes.description, styles.Description)}
          size="small"
        >
          {children || description}
        </Text>
      )}
    </div>
  </div>
);

export default Badge;
