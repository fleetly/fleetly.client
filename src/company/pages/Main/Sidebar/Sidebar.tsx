import React from 'react';

// Components
import Link from '@components/Link';
import { MainSidebarItem } from './components/Item';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Sidebar.scss';

export interface MainSidebarProps {
  data: ICompany[];
}

export const MainSidebar: React.FC<MainSidebarProps> = ({ data }) => (
  <div className={styles.Root}>
    <Link className={styles.Logo} to="/" />

    <div className={styles.List}>
      {data.map((company) => (
        <MainSidebarItem {...company} key={company.id} />
      ))}
    </div>

    <Link to={ROUTES.PROFILE.GENERAL} />
  </div>
);
