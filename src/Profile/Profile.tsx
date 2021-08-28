import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { Security } from './pages/Security';

export const Profile = () => (
  <Switch>
    <Route component={Security} exact path="/profile" />
  </Switch>
);
