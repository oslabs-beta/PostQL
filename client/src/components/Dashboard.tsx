import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Home from './Home';
import '../styles/application.scss';
import Analytics from './Analytics';

const Dashboard: FC = () => {
  function logout() {
    fetch('/api/auth/logout', {
      method: 'POST',
    })
      .then(() => window.location.reload());
  }

  return (
    <div className="app">
      <Router>
        <button type="submit" onClick={logout}>Logout</button>
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
};

export default Dashboard;
