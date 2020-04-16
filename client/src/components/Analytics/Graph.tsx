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
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Query/Resolver', ' ', 'Time in ns', ' ', 'Time in ns'],
          ['Query', 0, 291258, 0, 0],
          ['posts', 0, 28870, 0, 0],
          ['title', 28870, 14052, 76392, 14052],
          ['user', 42922, 9453, 76392, 8432],
          ['id', 52375, 8431, 76392, 6642],
          ['firstName', 60806, 8176, 76392, 7920],
          ['lastName', 68982, 7410, 76392, 5621],
        ]}
        options={{
          title: 'Query',
          chartArea: { width: '50%' },
          isStacked: true,
          series: [{ color: 'transparent' }, {}, { color: 'transparent' }, {}],
          hAxis: {
            title: 'Time in Nanoseconds',
            minValue: 0,
          },
          vAxis: {
            title: 'Query/Resolver',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '3' }}
      />
    </>
  );
};

export default Graph;
