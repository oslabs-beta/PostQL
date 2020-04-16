import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import QueryTable from './QueryTable';
import { PropTypes } from './SpecificAnalytics';


const SpecificOverview: FC<PropTypes> = ({ previousUrl }) => (
  <>
    <Link to={previousUrl}>Back</Link>
    <img src="/image/title.png" />
    <h2 className="specifictitle">Query Performance Analytics</h2>
    <QueryTable />
  </>
);

export default SpecificOverview;
