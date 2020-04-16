import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import SimpleTable from './SimpleTable';

const AnalyticsOverview: FC = () => (
  <>
    <Link to="/">Back</Link>
    <img src="/image/title.png" />
    <h2 className="analyticstitle">Performance Analytics</h2>
    <SimpleTable />
  </>
);


export default AnalyticsOverview;
