import classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import styles from './Menu.scss';

const Menu: React.FC<Menu.Props> = ({ className, classes, data }) => {
  const {
    rootClassName,
    groupClassName,
    iconClassName,
    linkClassName,
    listClassName,
    titleClassName
  } = React.useMemo(
    () => ({
      rootClassName: classNames(className, classes?.root, styles.Root),
      groupClassName: classNames(classes?.group, styles.Group),
      iconClassName: classNames(classes?.icon, styles.Icon),
      linkClassName: classNames(classes?.link, styles.Link),
      listClassName: classNames(classes?.list, styles.List),
      titleClassName: classNames(classes?.title, styles.Title)
    }),
    [className, classes]
  );

  return (
    <div className={rootClassName}>
      {data.map(({ children, title }, index: number) => (
        <div className={groupClassName} key={index}>
          {title && <div className={titleClassName}>{title}</div>}

          <div className={listClassName}>
            {children.map(({ exact, icon, title, to }, index: number) => (
              <NavLink
                activeClassName={styles.LinkIsSelected}
                className={linkClassName}
                exact={exact}
                key={index}
                to={to}
              >
                {icon && <i className={classNames(iconClassName, icon)} />}
                {title}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
