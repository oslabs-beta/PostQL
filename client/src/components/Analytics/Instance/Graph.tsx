import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { setGraph } from '../../../store/instance/actions';
import { AppState } from '../../../store';

const mapStateToProps = (state: AppState) => ({
  graphData: state.graph.graphData,
});

interface GraphProps {
  setGraph: typeof setGraph;
  graphData: any;
  thunkGraph: any;
}

// interface PropTypes {
//   previousUrl: string;
// }

const thunkGraph = (queryID: string, instanceID: string): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  console.log('FETCH', `/api/logs/display/${queryID}/${instanceID}`);
  fetch(`/api/logs/display/${queryID}/${instanceID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('THUNK', data);
      return dispatch(setGraph({ graphData: data }));
    });
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// adding eslint;

const Graph: FC< GraphProps> = (props: any) => {
  const classes = useStyles();
  const { queryID, instanceID } = useParams();
  // props.setGraph({ graphData: undefined });
  // const { outputMetrics } = props.graphData
  // const [googleChartData, setGoogleChartData] = useState([]);

  // useEffect is triggered when any normal lifecycle methods (componentDidLoad, componentDidUpdate(in this case here), componentWillUnmount), then use Effect get triggered
  useEffect(() => {
    // first time useEffect is run from componentDidLoad and console log will be undefined
    console.log('useeffect', props.graphData);
    // if (props.graphData !== undefined) {
    // // 2nd time useEffect is run is from componentDidUpdate and props.graphData is defined
    //   // setGoogleChartData(traceToGoogleChartsData(props.graphData));
    // } else {
    //   props.thunkGraph(queryID, instanceID);
    // }
    props.thunkGraph(queryID, instanceID);
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

  // if (props.instanceData !== undefined) {
  //   googleChartData = traceToGoogleChartsData(props.instanceData);
  // }

  return (
    !props.graphData ? <div />
      : (
        <div>
          <div className="split">
            <h2 className="Graphtitle">Gantt Chart:</h2>
            <Chart
              width="1000px"
              height="300px"
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={traceToGoogleChartsData(props.graphData)}
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
            <br />
            <br />
            <div>
              <div className="split">
                <h2 className="analyticstitle">Query Instance Analytics</h2>
              </div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Query</TableCell>
                      <TableCell align="right">TimeStamp</TableCell>
                      <TableCell align="right">Total Time duration&nbsp;(ms)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* { Array.isArray(props.instanceData[queryID].outputMetrics) && props.instanceData[queryID].outputMetrics.map((om: any, index: number) => ( */}
                    <TableRow key={props.graphData.outputMetrics.startTime}>
                      <TableCell component="th" scope="row">
                        {props.graphData.queryString}
                      </TableCell>
                      <TableCell align="right">{props.graphData.timeStamp}</TableCell>
                      <TableCell align="right">{props.graphData.outputMetrics.duration / 1000000}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>

      )
  );
};

export default connect(
  mapStateToProps,
  { setGraph, thunkGraph },
)(Graph);
