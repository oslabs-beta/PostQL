import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Home from './Home';
import Analytics from './Analytics';
import AutomatedTesting from './AutomatedTesting';
import PlaygroundHeader from './Headers/PlaygroundHeader';

const Dashboard: FC = () => {
  
  return (
    <div className="container">
      <Router>
        <div className="split">
          <PlaygroundHeader />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/automatedTesting">
            <AutomatedTesting />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


export default Dashboard;
