import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { Builder } from './pages/Builder';
import { Flows } from './pages/Flows';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

export const Flow: React.FC = () => (
  <Switch>
    <Route component={Flows} exact path={FLOW_ROUTES.ROOT} />

    <Route component={Builder} exact path={FLOW_ROUTES.FLOW} />

    <Route exact path={FLOW_ROUTES.FLOW_EDIT}>
      <Builder editable={true} />
    </Route>
  </Switch>
);
