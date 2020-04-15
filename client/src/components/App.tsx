import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Home from './Home';
import '../styles/application.scss';
import Analytics from './Analytics';

const App: FC = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
