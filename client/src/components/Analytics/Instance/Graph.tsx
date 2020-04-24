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

  const traceToGoogleChartsData = (data: any) => {
    const d3Data: (string | number)[][] = [
      ['Query/Resolver', ' ', 'Time in ns'],
      ['Query', 0, data.outputMetrics.duration],
    ];
    let timeElapsed = 0;
    const cache: any = {};
    for (let i = 0; i < data.outputMetrics.execution.resolvers.length; i++) {
      const resolver: any = data.outputMetrics.execution.resolvers[i];
      if (!cache[resolver.fieldName]) {
        cache[resolver.fieldName] = d3Data.length;
        d3Data.push([resolver.fieldName, timeElapsed, resolver.duration]);
        timeElapsed += resolver.duration;
      } else {
        d3Data[cache[resolver.fieldName]].push(timeElapsed, resolver.duration);
        if (d3Data[0].length !== d3Data[cache[resolver.fieldName]].length) {
          d3Data[0].push(' ', 'Time in ns');
          d3Data[1].push(0, 0);
        }
      }
    }
    for (let i = 2; i < d3Data.length; i++) {
      const dataArr = d3Data[i];
      const evenData = (data: any) => {
        if (d3Data[0].length !== data.length) {
          data.push(0, 0);
          evenData(data);
          // eslint-disable-next-line no-useless-return
        } else return;
      };
      evenData(dataArr);
    }
    return d3Data;
  };

  let googleChartData: any = [];

  if (instanceData !== undefined) {
    googleChartData = traceToGoogleChartsData(instanceData);
  }

  return (
    <div>
      <div className="split">
        <h2 className="Graphtitle">Gant Chart:</h2>
        <Chart
          width="1000px"
          height="300px"
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={googleChartData}
          options={{
            title: 'Query',
            chartArea: { width: '50%' },
            isStacked: true,
            series: [
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
              { color: 'transparent' },
              {},
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
