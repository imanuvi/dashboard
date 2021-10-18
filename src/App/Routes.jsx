import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Dashboard from 'Dashboard';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
