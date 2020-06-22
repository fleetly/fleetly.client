import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

type PropTypes = {
  id: string;
  notifications?: boolean;
  title: string;
};

const MainCompany: React.FunctionComponent<PropTypes> = ({
  id,
  notifications = false,
  title = ''
}) => (
  <NavLink
    activeClassName={styles.RootIsSelected}
    className={styles.Root}
    to={ROUTES.COMPANY.to(id)}
  >
    {notifications && <div className={styles.Notifications} />}
    <div className={styles.Cover}>{title.substr(0, 1)}</div>
  </NavLink>
);

export default MainCompany;
