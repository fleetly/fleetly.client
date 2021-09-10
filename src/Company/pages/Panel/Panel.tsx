import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import { CardHeader } from '@components/Card';
import Loader from '@components/Loader';
import Link from '@components/Link';
import Menu from '@components/Menu';

// Hooks
import { usePanel } from './Panel.hooks';

// Pages
import Billing from '../Billing';
import Channel from '../Channel';
import Channels from '../Channels';
import Collaborators from '../Collaborators';
import { General } from '../General';
import Fields from '../Fields';
import Tags from '../Tags';
import Subscribers from '../Subscribers';

// Routes
import { COMPANY_ROUTES } from '@company/Company.routes';

// Styles
import styles from './Panel.scss';

export const Panel: React.FC = () => {
  // Setup
  const { company, loading, menu } = usePanel();

  return (
    <div className={styles.Root}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.Sidebar}>
            <div className={styles.Header}>
              <Link>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={company?.title}
                      classes={{ root: styles.Avatar }}
                      toColor={company?.id}
                    />
                  }
                  subTitle="Software porject"
                  title={company?.title || 'Loading...'}
                />
              </Link>
            </div>

            <Menu className={styles.Menu} data={menu} />
          </div>

          <div className={styles.Container}>
            <Switch>
              <Route component={Billing} path={COMPANY_ROUTES.BILLING} />
              <Route component={Channel} path={COMPANY_ROUTES.CHANNEL} />
              <Route component={Channels} path={COMPANY_ROUTES.CHANNELS} />
              <Route
                component={Collaborators}
                path={COMPANY_ROUTES.COLLABORATORS}
              />
              <Route component={General} path={COMPANY_ROUTES.GENERAL} />
              <Route component={Fields} path={COMPANY_ROUTES.FIELDS} />
              <Route component={Tags} path={COMPANY_ROUTES.TAGS} />
              <Route
                component={Subscribers}
                path={COMPANY_ROUTES.SUBSCRIBERS}
              />
            </Switch>
          </div>
        </>
      )}
    </div>
  );
};
