import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import Playground from './Playground';

const App: FC = () => (
  <div className="app">
  <Switch>
    <Playground />
  </Switch>
  </div>
);

export default App;