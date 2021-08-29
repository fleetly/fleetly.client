import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { Collaboration } from './pages/Collaboration';
import { Security } from './pages/Security';

export const Profile = () => (
  <Switch>
    <Route component={Collaboration} exact path="/profile" />
    <Route component={Security} exact path="/profile/security" />
  </Switch>
);
