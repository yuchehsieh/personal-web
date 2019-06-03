import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';

import Works from './components/works';
import WorkDetail from './components/works/work_detail';
import Resume from './components/resume';
import NotFound from './components/ui/not_found';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/works" exact component={Works} />
        <Route path="/works/:work_name" exact component={WorkDetail} />
        <Route path="/resume" exact component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
