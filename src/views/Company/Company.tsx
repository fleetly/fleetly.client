import { get } from 'lodash';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Subscriber from '@containers/Subscriber';

import Info from './containers/Info';
import Menu from './containers/Menu';

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

const Company: React.FC<Company.Props> = ({ match }) => {
  const companyId: string = get(match, 'params.companyId');

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        <div className={styles.Company}>
          <Info companyId={companyId} />
        </div>

        <div className={styles.Menu}>
          <Menu companyId={companyId} />
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
