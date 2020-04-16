import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';

import '../../styles/application.scss';
import { PropTypes } from './SpecificAnalytics';


const D3: FC<PropTypes> = ({ previousUrl }) => (
  <>
    <Link to={previousUrl}>Back</Link>
    <h2 className="D3title">D3 Chart</h2>
  </>
);

export default D3;
