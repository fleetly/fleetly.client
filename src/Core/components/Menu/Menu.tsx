import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import styles from './Menu.scss';

export interface Classes extends ExtendedClasses {
  group?: string;
  icon?: string;
  link?: string;
  list?: string;
  title?: string;
}

export interface MenuGroupProps {
  children: MenuItemProps[];
  title?: string;
}

export interface MenuItemProps {
  exact?: boolean;
  icon?: string;
  title: string;
  to: string;
}

export interface MenuProps {
  classes?: Classes;
  className?: string;
  data: MenuGroupProps[];
}

const Menu: React.FC<MenuProps> = ({ className, classes, data }) => (
  <div className={classNames(className, classes?.root, styles.Root)}>
    {data.map(({ children, title }, index: number) => (
      <div className={classNames(classes?.group, styles.Group)} key={index}>
        {title && (
          <div className={classNames(classes?.title, styles.Title)}>
            {title}
          </div>
        )}

        <div className={classNames(classes?.list, styles.List)}>
          {children.map(({ exact, icon, title, to }, index: number) => (
            <NavLink
              activeClassName={styles.LinkIsSelected}
              className={classNames(classes?.link, styles.Link)}
              exact={exact}
              key={index}
              to={to}
            >
              {icon && (
                <i className={classNames(classes?.icon, styles.Icon, icon)} />
              )}
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Menu;
