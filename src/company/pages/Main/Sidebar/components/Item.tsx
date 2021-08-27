import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Item.scss';

// Utils
import { fillUrl } from '@utils/url';

export interface MainSidebarItemProps {
  id: string;
  title: string;
}

export const MainSidebarItem: React.FC<MainSidebarItemProps> = ({
  id,
  title
}) => (
  <NavLink
    activeClassName={styles.RootIsSelected}
    className={styles.Root}
    to={fillUrl(ROUTES.COMPANY.ROOT, { companyId: id })}
  >
    <Avatar alt={title} className={styles.Avatar} toColor={id} />
  </NavLink>
);
