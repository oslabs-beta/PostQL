import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';

import '../../styles/application.scss';
import SpecificAnalytics, { PropTypes } from './SpecificAnalytics';
import AnalyticsOverview from './AnalyticsOverview';


const D3: FC<PropTypes> = ({ previousUrl }) => (
  <>
    <Link to={previousUrl}>Back</Link>
    <img src="/image/title.png" />
    <h2 className="D3title">D3 Chart</h2>
  </>
);

export default D3;
