import React, { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PlaygroundDisplay from './PlaygroundDisplay';

const App: FC = () => (
  <div className="app">
    <Router>
      <Switch>
        <PlaygroundDisplay />
      </Switch>
    </Router>
  </div>
);

export default App;
