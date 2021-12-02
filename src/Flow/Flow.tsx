import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { Builder } from './pages/Builder';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

export const Flow: React.FC = () => (
  <Switch>
    <Route component={Builder} path={FLOW_ROUTES.FLOW} />
  </Switch>
);
