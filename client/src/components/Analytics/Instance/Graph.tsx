import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Chart } from 'react-google-charts';

interface PropTypes {
  previousUrl: string;
}

const Graph: FC<PropTypes> = ({ previousUrl }) => {
  const { queryID, instanceID } = useParams();
  const [instanceData, setInstanceData] = useState();

  function getInstanceData(): void {
    fetch(`/api/logs/display/${queryID}/${instanceID}`)
      .then((res) => res.json())
      .then((data) => setInstanceData(data));
  }

  useEffect(() => {
    getInstanceData();
  }, []);

  if (instanceData) console.log(instanceData);

  return (
    <div>
      <div className="split">
        <h2 className="Graphtitle">Graphs</h2>
        <Link to={`${previousUrl}/${queryID}`}>
          <button type="button">Back</button>
        </Link>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Query/Resolver', ' ', 'Time in ns'],
            ['Query', 0, 3838321],
            ['post', 0, 356972],
            ['id', 356972, 79810],
            ['title', 436782, 15926],
            ['body', 452708, 12026],
          ]}
          options={{
            title: 'Query',
            chartArea: { width: '50%' },
            isStacked: true,
            series: [
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
            ],
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
      </div>
    </div>
  );
};

export default Graph;
