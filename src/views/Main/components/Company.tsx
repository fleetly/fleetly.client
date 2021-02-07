import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

// Utils
import { fillUrl } from '@utils/url';

type PropTypes = {
  id: string;
  notifications?: boolean;
  title: string;
};

const MainCompany: React.FC<PropTypes> = ({
  id,
  notifications = false,
  title = ''
}) => (
  <NavLink
    activeClassName={styles.RootIsSelected}
    className={styles.Root}
    to={fillUrl(ROUTES.COMPANY.ROOT, { companyId: id })}
  >
    {notifications && <div className={styles.Notifications} />}
    <Avatar alt={title} classes={{ root: styles.Avatar }} toColor={id} />
  </NavLink>
);

export default MainCompany;
