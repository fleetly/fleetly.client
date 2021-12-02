import classNames from 'classnames';
import React from 'react';

// Components
import Icon from '@components/Icon';
import Link from '@components/Link';
import { Text } from '@components/Typography';

// Styles
import styles from './Item.scss';
import { getClassName } from '@utils/styles';

export interface ContextMenuItemClasses extends ExtendedClasses {
  arrow?: string;
  icon?: string;
  title?: string;
}

export interface ContextMenuItemProps {
  arrow?: boolean;
  classes?: ContextMenuItemClasses;
  className?: string;
  color?: Color;
  icon?: string;
  onClick?(event: React.SyntheticEvent): void;
  selected?: boolean;
  title: string;
  to?: string;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  arrow,
  classes = {},
  className,
  color = 'blue',
  icon,
  onClick,
  selected,
  title,
  to,
  ...props
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
        getClassName('color', { collection: styles, value: color }),
        { [styles.RootIsSelected]: selected }
      )}
      onClick={onClick}
      {...props}
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
        size="small"
        weight="semiBold"
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
