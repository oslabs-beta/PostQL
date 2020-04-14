import React, { FC } from 'react';
import {BrowserRouter as Router,
  Route,
  Link,
  Switch } from 'react-router-dom';
import Playground from './Playground';
import Analytics from './Analytics';

const App: React.FC<{}> = () => (
  <div className="app">
  <Router>
  <Switch>
    <Route path = '/analytics'>
      <Analytics/>
    </Route>
    <Route path = '/'>
    <img className = "logo" src = "../image/title.png"></img>
    <Link to='/analytics'><button>Analytics</button></Link>
    <Playground />
    </Route>
  </Switch>
  </Router>
  </div>
);

export default App;