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
      <Link to="/analytics">Analytics</Link>
      <Switch>
        <Route path="/" exact>
          <PlaygroundDisplay />
        </Route>

        <Route path="/analytics">
          <Analytics />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
