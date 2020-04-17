import React, { FC } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Analytics from './Analytics';
import Query from './Query';
import Instance from './Instance';


const AnalyticsRouting: FC = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/:queryID/:instanceID`}>
          <Instance previousUrl={path} />
        </Route>

        <Route path={`${path}/:queryID`}>
          <Query previousUrl={path} />
        </Route>


        <Route path={path} exact>
          <Analytics />
        </Route>

      </Switch>
    </div>
  );
};

export default AnalyticsRouting;
