import * as React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

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
import Channel from '@views/Channel';
import Channels from '@views/Channels';
import Collaborators from '@views/Collaborators';
import Dialog from '@views/Dialog';
import General from '@views/General';
import Fields from '@views/Fields';
import Subscribers from '@views/Subscribers';
import Tags from '@views/Tags';

// Utils
import { fillUrl } from '@utils/url';

const Company: React.FC<{}> = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const MENU = React.useMemo<Menu.Group[]>(
    () => [
      {
        children: [
          {
            icon: 'far fa-tachometer-alt',
            title: 'Dashboard',
            to: fillUrl(ROUTES.COMPANY.DASHBOARD, { companyId })
          }
        ]
      },
      {
        children: [
          {
            icon: 'far fa-comment',
            title: 'Chat',
            to: fillUrl(ROUTES.COMPANY.CHAT, { companyId })
          },
          {
            icon: 'far fa-code-merge',
            title: 'Flow',
            to: fillUrl(ROUTES.COMPANY.FLOW, { companyId })
          }
        ],
        title: 'Apps'
      },
      {
        children: [
          {
            icon: 'far fa-database',
            title: 'Channels',
            to: fillUrl(ROUTES.COMPANY.CHANNELS, { companyId })
          },
          {
            icon: 'far fa-users',
            title: 'Subscribers',
            to: fillUrl(ROUTES.COMPANY.SUBSCRIBERS, { companyId })
          }
        ],
        title: 'General'
      },
      {
        children: [
          {
            icon: 'far fa-home-alt',
            title: 'General',
            to: fillUrl(ROUTES.COMPANY.GENERAL, { companyId })
          },
          {
            icon: 'far fa-wallet',
            title: 'Billing',
            to: fillUrl(ROUTES.COMPANY.BILLING, { companyId })
          },
          {
            icon: 'far fa-user-friends',
            title: 'Collaborators',
            to: fillUrl(ROUTES.COMPANY.COLLABORATORS, { companyId })
          },
          {
            icon: 'far fa-table',
            title: 'Fields',
            to: fillUrl(ROUTES.COMPANY.FIELDS, { companyId })
          },
          {
            icon: 'far fa-bells',
            title: 'Notifications',
            to: fillUrl(ROUTES.COMPANY.NOTIFICATIONS, { companyId })
          },
          {
            icon: 'far fa-tags',
            title: 'Tags',
            to: fillUrl(ROUTES.COMPANY.TAGS, { companyId })
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
          <Info />
        </div>

        <div className={styles.Menu}>
          <Menu data={MENU} />
        </div>
      </div>

      <div className={styles.Content}>
        <Switch>
          <Route component={Channel} path={ROUTES.COMPANY.CHANNEL} />
          <Route component={Channels} path={ROUTES.COMPANY.CHANNELS} />
          <Route component={Dialog} path={ROUTES.COMPANY.CHAT} />
          <Route
            component={Collaborators}
            path={ROUTES.COMPANY.COLLABORATORS}
          />
          <Route component={Fields} path={ROUTES.COMPANY.FIELDS} />
          <Route component={General} path={ROUTES.COMPANY.GENERAL} />
          <Route component={Subscribers} path={ROUTES.COMPANY.SUBSCRIBERS} />
          <Route component={Tags} path={ROUTES.COMPANY.TAGS} />
        </Switch>
      </div>

      <Subscriber />
    </div>
  );
};

export default Company;
