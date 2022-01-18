import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { Editor } from './pages/Editor';
import { Flows } from './pages/Flows';
import { Viewer } from './pages/Viewer';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

export const Flow: React.FC = () => (
  <Switch>
    <Route component={Flows} exact path={FLOW_ROUTES.ROOT} />
    <Route component={Editor} exact path={FLOW_ROUTES.FLOW_EDIT} />
    <Route component={Viewer} exact path={FLOW_ROUTES.FLOW} />
  </Switch>
);
