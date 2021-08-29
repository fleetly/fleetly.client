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
import Fields from '../Fields';
import Tags from '../Tags';
import Subscribers from '../Subscribers';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Panel.scss';

// Utils
import { fillUrl } from '@utils/url';

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
              <Link
                to={fillUrl(ROUTES.COMPANY.DASHBOARD, {
                  companyId: company?.id
                })}
              >
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
              <Route component={Billing} path={ROUTES.COMPANY.BILLING} />
              <Route component={Channel} path={ROUTES.COMPANY.CHANNEL} />
              <Route component={Channels} path={ROUTES.COMPANY.CHANNELS} />
              <Route
                component={Collaborators}
                path={ROUTES.COMPANY.COLLABORATORS}
              />
              <Route component={Fields} path={ROUTES.COMPANY.FIELDS} />
              <Route component={Tags} path={ROUTES.COMPANY.TAGS} />
              <Route
                component={Subscribers}
                path={ROUTES.COMPANY.SUBSCRIBERS}
              />
            </Switch>
          </div>
        </>
      )}
    </div>
  );
};
