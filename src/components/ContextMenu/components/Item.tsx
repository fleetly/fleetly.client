import classNames from 'classnames';
import React from 'react';

// Components
import Icon from '@components/Icon';
import Link from '@components/Link';
import { Text } from '@components/Typography';

// Styles
import styles from './Item.scss';
import { getClassName } from '@utils/styles';

interface Classes extends ExtendedClasses {
  arrow?: string;
  icon?: string;
  title?: string;
}

interface PropTypes {
  arrow?: boolean;
  classes?: Classes;
  className?: string;
  color?: Color;
  icon?: string;
  onClick?(event: React.SyntheticEvent): void;
  title: string;
  to?: string;
}

const ContextMenuItem: React.FC<PropTypes> = ({
  arrow,
  classes = {},
  className,
  color = 'blue',
  icon,
  onClick,
  title,
  to
}) => {
  const Component = (props: any) =>
    to ? (
      <Link {...props} to={to} />
    ) : (
      <div {...props} role="menuitem" tabIndex={0} />
    );

  return (
    <Component
      className={classNames(
        className,
        classes.root,
        styles.Root,
        getClassName('color', { collection: styles, value: color })
      )}
      onClick={onClick}
    >
      {icon && (
        <Icon
          className={classNames(classes.icon, styles.Icon)}
          color={color}
          icon={icon}
        />
      )}

      <Text
        className={classNames(classes.title, styles.Title)}
        medium
        size="small"
      >
        {title}
      </Text>

      {arrow && (
        <i
          className={classNames(
            classes.arrow,
            styles.Arrow,
            'far fa-angle-right'
          )}
        />
      )}
    </Component>
  );
};

export default ContextMenuItem;
