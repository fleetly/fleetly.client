import { get } from 'lodash';
import * as React from 'react';

// Containers
import Info from './containers/Info';
import Menu from './containers/Menu';

// Styles
import styles from './Company.scss';

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
      <div className={styles.Content}>Content</div>
    </div>
  );
};

export default Company;
