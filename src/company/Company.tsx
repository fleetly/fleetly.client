import { useQuery } from '@apollo/client';
import React, { lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Link from '@components/Link';
import Loader from '@components/Loader';

// Containers
import { Subscriber } from './containers/Subscriber';
import { Sudo } from './containers/Sudo';

// GraphQL
import GET_COMPANY_LIST from './Company.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

// Utils
import { fillUrl } from '@utils/url';

// Views
const Chat = lazy(() => import('../Chat'));
const Flow = lazy(() => import('../Flow'));
const Panel = lazy(() => import('./pages/Panel'));

export const Company: React.FC = () => {
  // Data
  const { data, loading } = useQuery<{ companies: ICompany[] }>(
    GET_COMPANY_LIST
  );

  return (
    <div className={styles.Root}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.Sidebar}>
            <Link className={styles.Logo} to="/" />

            {data?.companies && data?.companies.length > 0 && (
              <div className={styles.List}>
                {data?.companies.map(({ id, title }) => (
                  <NavLink
                    activeClassName={styles.LinkIsSelected}
                    className={styles.Link}
                    to={fillUrl(ROUTES.COMPANY.ROOT, { companyId: id })}
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

            <Link to={ROUTES.PROFILE.GENERAL} />
          </div>

          <div className={styles.Container}>
            <Switch>
              <Route component={Chat} path="/:companyId/chat" />
              <Route component={Flow} path="/:companyId/flows" />
              <Route component={Panel} path="/:companyId" />
            </Switch>
          </div>

          <Subscriber />
          <Sudo />
        </>
      )}
    </div>
  );
};
