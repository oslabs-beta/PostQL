import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Home from './Home';
import Analytics from './Analytics';

const Dashboard: FC = () => {
  function logout() {
    fetch('/api/auth/logout', {
      method: 'POST',
    })
      .then(() => window.location.reload());
  }

  return (
    <div className="container">
      <Router>
        <div className="split">
          <Link to="/"><img className="logo" src="/image/title.png" /></Link>
          <button type="submit" onClick={logout}>Logout</button>
        </div>
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
