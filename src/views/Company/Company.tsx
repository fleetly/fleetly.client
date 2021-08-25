import classNames from 'classnames';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Menu from '@components/Menu';

// Fragments
import { CompanyInfo } from './Info';

// Containers
// import Subscriber from '@containers/Subscriber';

// Hooks
import { useCompanyView } from './Company.hooks';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Company.scss';

// Views
import Billing from '@views/Billing';
// import Channel from '@views/Channel';
import Channels from '@views/Channels';
// import Chat, { Threads } from '@views/Chat';
// import Collaborators from '@views/Collaborators';
// import General from '@views/General';
// import Fields from '@views/Fields';
// import FlowBuilder from '@views/FlowBuilder';
// import Subscribers from '@views/Subscribers';
// import Tags from '@views/Tags';

const Company: React.FC = () => {
  // Setup
  const { company, isChat, menu } = useCompanyView();

  return (
    <div className={styles.Root}>
      <div
        className={classNames(styles.Sidebar, {
          [styles.SidebarVariantChat]: isChat,
          [styles.SidebarVariantMenu]: !isChat
        })}
      >
        {company && <CompanyInfo {...company} />}
        <Menu className={styles.Menu} data={menu} />
        {/* {isChat ? <Threads /> : <Menu data={menu} />} */}
      </div>

      <div className={styles.Content}>
        <Switch>
          <Route component={Billing} path={ROUTES.COMPANY.BILLING} />
          <Route component={Channels} path={ROUTES.COMPANY.CHANNELS} />
          {/*
          <Route component={Channel} path={ROUTES.COMPANY.CHANNEL} />
          <Route component={Channels} path={ROUTES.COMPANY.CHANNELS} />
          <Route component={Chat} path={ROUTES.COMPANY.CHAT.ROOT} />
          <Route
            component={Collaborators}
            path={ROUTES.COMPANY.COLLABORATORS}
          />
          <Route component={Fields} path={ROUTES.COMPANY.FIELDS} />
          <Route component={FlowBuilder} path={ROUTES.COMPANY.FLOWS.ROOT} />
          <Route component={General} path={ROUTES.COMPANY.GENERAL} />
          <Route component={Subscribers} path={ROUTES.COMPANY.SUBSCRIBERS} />
          <Route component={Tags} path={ROUTES.COMPANY.TAGS} /> */}
        </Switch>
      </div>

      {/* <Subscriber /> */}
    </div>
  );
};

export default Company;
