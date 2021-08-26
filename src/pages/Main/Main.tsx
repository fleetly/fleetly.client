import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

// Components
import Loader from '@components/Loader';

// Domains
import { MainSidebar } from './Sidebar';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Main.scss';

// Views
import Company from '@pages/Company';
// import Profile from '@views/Profile';

// Utils
import { fillUrl } from '@utils/url';

const Main: React.FC = () => {
  // State
  const isProfile = !!useRouteMatch(ROUTES.PROFILE.GENERAL);

  // Data
  const { data, loading } = useQuery<{ companies: ICompany[] }>(
    GET_COMPANY_LIST
  );

  return loading ? (
    <Loader />
  ) : (
    <div
      className={classNames(styles.Root, {
        [styles.RootWithSidebar]: !isProfile
      })}
    >
      {!isProfile && <MainSidebar data={data?.companies || []} />}

      <div className={styles.Container}>
        <Switch>
          {/* <Route component={Profile} path={ROUTES.PROFILE.GENERAL} /> */}
          <Route component={Company} path={ROUTES.COMPANY.ROOT} />

          {!isProfile && data?.companies && (
            <Redirect
              exact
              path="/"
              to={fillUrl(ROUTES.COMPANY.DASHBOARD, {
                companyId: data?.companies[0]?.id
              })}
            />
          )}
        </Switch>
      </div>
    </div>
  );
};

export default Main;
