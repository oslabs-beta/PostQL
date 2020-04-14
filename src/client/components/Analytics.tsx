import * as React from 'react';
import {BrowserRouter as Router,
    Route,
    Link,
    Switch } from 'react-router-dom';
import App from './App';
import Table from '@material-ui/core/Table';

const Analytics: React.FC<{}> = () => (
    <div className="analytics">
  <Router>
  <Switch>
    <Route path = '/analytics'>
    <img src = "../image/title.png"></img>
    <Link to='/'><button>Back</button></Link>

    </Route>
    <Route path = '/'>
      <App/>
    </Route>
  </Switch>
  </Router>
  </div>
);

export default Analytics;