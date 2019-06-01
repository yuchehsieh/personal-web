import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';

import Collections from './components/collections';
import Resume from './components/resume';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/collections" exact component={Collections} />
        <Route path="/resume" exact component={Resume} />
      </Switch>
    </Layout>
  );
};

export default Routes;
