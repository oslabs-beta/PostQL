import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';

const Analytics: React.FC<{}> = () => (
  <div className="analytics">
    <h3>Analytics</h3>
    <Link to="/">Back</Link>
    <img src="/image/title.png" />
  </div>
);

export default Analytics;
