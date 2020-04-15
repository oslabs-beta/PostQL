import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface PropTypes {
  previousUrl: string;
}

const SpecificAnalytics: FC<PropTypes> = ({ previousUrl }) => (
  <>
    <Link to={previousUrl}>Back</Link>
    <img src="/image/title.png" />
    <h2 className="analyticstitle">Query Performance Analytics</h2>
  </>
);

export default SpecificAnalytics;
