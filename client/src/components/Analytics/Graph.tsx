import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';

import '../../styles/application.scss';
import SpecificAnalytics, { PropTypes } from './SpecificAnalytics';
import AnalyticsOverview from './AnalyticsOverview';


const Graph: FC<PropTypes> = ({ previousUrl }) => (
  <>
    <Link to={previousUrl}>Back</Link>
    <img src="/image/title.png" />
    <h2 className="Graphtitle">Graphs</h2>
  </>
);

export default Graph;
