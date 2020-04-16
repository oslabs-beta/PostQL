import React, { FC } from 'react';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';

import '../../styles/application.scss';
import SpecificAnalytics from './SpecificAnalytics';
import AnalyticsOverview from './AnalyticsOverview';


const Analytics: FC = () => {
  const { path } = useRouteMatch();
  return (
    <div className="analytics">
      <Switch>
        <Route path={`${path}/:queryID`}>
          <SpecificAnalytics previousUrl={path} />
        </Route>
        <Route path={path} exact>
          <AnalyticsOverview />
        </Route>
      </Switch>
    </div>
  );
};

export default Analytics;
