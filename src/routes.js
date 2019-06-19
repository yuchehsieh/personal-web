import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/home';
import Works from './components/works';
import WorkDetail from './components/work_detail';
import About from './components/about';
import Resume from './components/resume';
import NotFound from './components/ui/not_found';

const Routes = props => {
  return (
    <Switch>
      <Route path="/works" exact component={Works} />
      <Route path="/works/:work_name" exact component={WorkDetail} />
      <Route path="/about" exact component={About} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
