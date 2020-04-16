import * as React from 'react';
import {
  Link, Switch, Route, useLocation,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/application.scss';
import SimpleTable from './QueryTable';

const QueryAnalytics: React.FC<{}> = () => (
  <div className="queryAnalytics">
    <Switch>
      <Route path="/analytics/:query_id/d3">
        <Link to="/analytics">Back</Link>
        <img src="/image/title.png" />
        <h2 className="analyticstitle">Query Performance Analytics</h2>
      </Route>
      <Route path="/analytics">
        <Link to="/">Back</Link>
        <img src="/image/title.png" />
        <h2 className="analyticstitle">Performance Analytics</h2>
        <SimpleTable />
      </Route>
    </Switch>
  </div>
);

export default QueryAnalytics;
