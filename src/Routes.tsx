import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoutes from './utils/Auth/components/Routes';

import Default from './pages/Default/Default';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/auth" component={AuthRoutes} />
    <Route component={Default} />
  </Switch>
);

export default Routes;
