import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import '../styles/application.scss';
import PlaygroundDisplay from './PlaygroundDisplay';
import Analytics from './Analytics';

const App: FC = () => (
  <div className="app">
    <Router>
      <Route path="/analytics">
        <Analytics />
      </Route>
      <Switch>
        <Route path="/" exact>
          <Link to="/analytics">Analytics</Link>
          <PlaygroundDisplay />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
