import { get } from 'lodash';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Info from './containers/Info';
import Menu from './containers/Menu';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

// Views
import Subscribers from '@views/Subscribers';
import Fields from '@views/Fields';
import Tags from '@views/Tags';

const Company: React.FunctionComponent<Company.Props> = ({ match }) => {
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
          <Route
            component={Subscribers}
            path={ROUTES.COMPANY.SUBSCRIBERS.path}
          />
          <Route component={Fields} path={ROUTES.COMPANY.FIELDS.path} />
          <Route component={Tags} path={ROUTES.COMPANY.TAGS.path} />
        </Switch>
      </div>
    </div>
  );
};

export default Company;
