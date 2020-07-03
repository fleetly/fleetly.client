import classNames from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Data
import { MENU } from '../data';

// Styles
import styles from './Menu.scss';

// Utils
import { fillUrl } from '@utils/url';

const CompanyMenu: React.FunctionComponent<Company.Menu.Props> = ({
  companyId
}) => (
  <div className={styles.Root}>
    {MENU.map(({ children, title }, index) => (
      <div className={styles.Category} key={index}>
        {title && <div className={styles.Title}>{title}</div>}

        <div className={styles.List}>
          {children.map(({ icon, title, to }, index) => (
            <NavLink
              activeClassName={styles.LinkIsSelected}
              className={styles.Link}
              key={index}
              to={fillUrl(to, { companyId })}
            >
              <i className={classNames(styles.Icon, icon)} />
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CompanyMenu;
