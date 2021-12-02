import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import {
  generatePath,
  NavLink,
  Redirect,
  Route,
  Switch,
  useParams
} from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Link from '@components/Link';
import Loader from '@components/Loader';

// Containers
import { CompanyCreate } from './containers/Create';
import { Subscriber } from './containers/Subscriber';
import { Sudo } from './containers/Sudo';

// GraphQL
import GET_COMPANY_LIST from './Company.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import { CHAT_ROUTES } from '@chat/Chat.routes';
import { COMPANY_ROUTES } from '@company/Company.routes';
import { FLOW_ROUTES } from '@flow/Flow.routes';
import { PROFILE_ROUTES } from '@profile/Profile.routes';

// Store
import { useSession } from '@store';

// Styles
import styles from './Company.scss';

// Views
import Chat from '../Chat';
import { Flow } from '../Flow';
import Panel from './pages/Panel';

export const Company: React.FC = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const { user } = useSession();

  // Data
  const { data: { companies = [] } = {}, loading } = useQuery<{
    companies: ICompany[];
  }>(GET_COMPANY_LIST);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsEmpty]: companies.length === 0
      })}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {!companyId && companies.length > 0 && (
            <Redirect
              from="/"
              to={generatePath(COMPANY_ROUTES.ROOT, {
                companyId: companies[0].id
              })}
            />
          )}

          <div className={styles.Sidebar}>
            <Link className={styles.Logo} to="/" />

            {companies.length > 0 && (
              <div className={styles.List}>
                {companies.map(({ id, title }) => (
                  <NavLink
                    key={id}
                    activeClassName={styles.LinkIsSelected}
                    className={styles.Link}
                    to={generatePath(COMPANY_ROUTES.ROOT, { companyId: id })}
                  >
                    <Avatar
                      alt={title}
                      className={styles.Avatar}
                      toColor={id}
                    />
                  </NavLink>
                ))}
              </div>
            )}

            <Link className={styles.Profile} to={PROFILE_ROUTES.ROOT}>
              <Avatar alt={user.fullname} toColor={user.id} />
            </Link>
          </div>

          <div className={styles.Container}>
            <Switch>
              <Route component={Chat} path={CHAT_ROUTES.ROOT} />
              <Route component={Flow} path={FLOW_ROUTES.ROOT} />
              <Route component={Panel} path={COMPANY_ROUTES.ROOT} />
            </Switch>
          </div>

          <CompanyCreate opened={companies.length === 0} />
          <Subscriber />
          <Sudo />
        </>
      )}
    </div>
  );
};
