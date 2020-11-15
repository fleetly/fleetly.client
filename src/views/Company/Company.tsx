import { get } from 'lodash';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Menu from '@components/Menu';

// Containers
import Subscriber from '@containers/Subscriber';
import Info from './containers/Info';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

// Views
import Channels from '@views/Channels';
import Collaborators from '@views/Collaborators';
import General from '@views/General';
import Fields from '@views/Fields';
import Subscribers from '@views/Subscribers';
import Tags from '@views/Tags';

// Utils
import { fillUrl } from '@utils/url';

const Company: React.FC<Company.Props> = ({ match }) => {
  const companyId: string = get(match, 'params.companyId');

  const MENU = React.useMemo<Menu.Group[]>(
    () => [
      {
        children: [
          {
            icon: 'far fa-tachometer-alt',
            title: 'Dashboard',
            to: fillUrl(ROUTES.COMPANY.DASHBOARD.path, { companyId })
          }
        ]
      },
      {
        children: [
          {
            icon: 'far fa-comment',
            title: 'Chat',
            to: fillUrl(ROUTES.CHAT.path, { companyId })
          },
          {
            icon: 'far fa-code-merge',
            title: 'Flow',
            to: fillUrl(ROUTES.FLOW.path, { companyId })
          }
        ],
        title: 'Apps'
      },
      {
        children: [
          {
            icon: 'far fa-database',
            title: 'Channels',
            to: fillUrl(ROUTES.COMPANY.CHANNELS.path, { companyId })
          },
          {
            icon: 'far fa-users',
            title: 'Subscribers',
            to: fillUrl(ROUTES.COMPANY.SUBSCRIBERS.path, { companyId })
          }
        ],
        title: 'General'
      },
      {
        children: [
          {
            icon: 'far fa-home-alt',
            title: 'General',
            to: fillUrl(ROUTES.COMPANY.GENERAL.path, { companyId })
          },
          {
            icon: 'far fa-wallet',
            title: 'Billing',
            to: fillUrl(ROUTES.COMPANY.BILLING.path, { companyId })
          },
          {
            icon: 'far fa-user-friends',
            title: 'Collaborators',
            to: fillUrl(ROUTES.COMPANY.COLLABORATORS.path, { companyId })
          },
          {
            icon: 'far fa-table',
            title: 'Fields',
            to: fillUrl(ROUTES.COMPANY.FIELDS.path, { companyId })
          },
          {
            icon: 'far fa-bells',
            title: 'Notifications',
            to: fillUrl(ROUTES.COMPANY.NOTIFICATIONS.path, { companyId })
          },
          {
            icon: 'far fa-tags',
            title: 'Tags',
            to: fillUrl(ROUTES.COMPANY.TAGS.path, { companyId })
          }
        ],
        title: 'Settings'
      }
    ],
    [companyId]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        <div className={styles.Company}>
          <Info companyId={companyId} />
        </div>

        <div className={styles.Menu}>
          <Menu data={MENU} />
        </div>
      </div>

      <div className={styles.Content}>
        <Switch>
          <Route component={Channels} path={ROUTES.COMPANY.CHANNELS.path} />
          <Route
            component={Collaborators}
            path={ROUTES.COMPANY.COLLABORATORS.path}
          />
          <Route component={Fields} path={ROUTES.COMPANY.FIELDS.path} />
          <Route component={General} path={ROUTES.COMPANY.GENERAL.path} />
          <Route
            component={Subscribers}
            path={ROUTES.COMPANY.SUBSCRIBERS.path}
          />
          <Route component={Tags} path={ROUTES.COMPANY.TAGS.path} />
        </Switch>
      </div>

      <Subscriber />
    </div>
  );
};

export default Company;
