import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PropTypes } from './SpecificAnalytics';
import { Chart } from 'react-google-charts';

const Graph: FC<PropTypes> = ({ previousUrl }) => {
  const { queryID, instanceID } = useParams();

  const [instanceData, setInstanceData] = useState();

  function getInstanceData() {
    fetch(`/api/logs/display/${queryID}/${instanceID}`)
      .then((res) => res.json())
      .then((data) => setInstanceData(data));
  }

  useEffect(() => {
    getInstanceData();
  }, []);

  console.log(instanceData);

  return (
    <>
      <Link to={previousUrl}>Back</Link>
      <h2 className="D3title">D3 Chart</h2>
    </>
  );
};

export default Graph;
