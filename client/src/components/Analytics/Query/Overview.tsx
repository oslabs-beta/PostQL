import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import QueryTable from './QueryTable';

interface PropTypes {
  previousUrl: string;
}

const Overview: FC<PropTypes> = ({ previousUrl }) => {
  const x = 10;

  return (
    <div>
      <div className="split">
        <h2 className="analyticstitle">Query Analytics</h2>
        <Link to={previousUrl}><button type="button">Back</button></Link>
      </div>
      <QueryTable />
    </div>
  );
};

export default Overview;
