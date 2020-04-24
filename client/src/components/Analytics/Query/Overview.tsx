import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import QueryTable from './QueryTable';

interface PropTypes {
  previousUrl: string;
}

const Overview: FC<PropTypes> = ({ previousUrl }) => (
  <div>
    <div className="split">
      <h2 className="analyticstitle">Query Analytics</h2>
    </div>
    <QueryTable />
  </div>
);

export default Overview;
