import * as React from 'react';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import '../styles/application.scss';
import SimpleTable from './AnalyticsTable';


const Analytics: React.FC<{}> = () => {
  const { path } = useRouteMatch();
  return (
    <div className="analytics">
      <Switch>
        <Route path={`${path}/:queryID`}>
          <Link to={path}>Back</Link>
          <img src="/image/title.png" />
          <h2 className="analyticstitle">Query Performance Analytics</h2>
        </Route>
        <Route path={path} exact>
          <Link to="/">Back</Link>
          <img src="/image/title.png" />
          <h2 className="analyticstitle">Performance Analytics</h2>
          <SimpleTable />
        </Route>
      </Switch>
    </div>
  );
};

export default Analytics;
