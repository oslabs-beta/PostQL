import React, { FC, useEffect, useState } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store';
import { setInstance } from '../../../store/query/actions';

const mapStateToProps = (state: AppState) => ({
  instanceData: state.query.instanceData,
});

interface QueryProps {
  setInstance: typeof setInstance;
  instanceData: any;
  thunkQuery: any;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

  interface Table {
    query: string;
    timestamp: number;
    link: string;
  }

interface InstanceData {
  outputMetrics: any;
  queryIDs: any;
  timeStamp: any;
  queryString: any;
}

const thunkQuery = (queryID: string): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
  const { query } = getState();
  // if key queryID already exists, do nothing
  if (query.instanceData[queryID]) {

  } else {
    // if not, add key value to object
    fetch(`/api/logs/display/${queryID}`)
      .then((res) => res.json())
      .then((data) => dispatch(setInstance({ instanceData: { [queryID]: data } })));
  }
};
// return dispatch(setInstance({...state, instanceData: data}))

//   fetch('/api/logs/display')
//     .then((response) => response.json())
//     // .then((response) => console.log(response))
//     .then((data) => {
//       return dispatch(setQueryData({queryData: data}))
//     })
//     .then(() => console.log('QUERYDATA',props.queryData));
// }

const QueryTable: FC<QueryProps> = (props: any) => {
  const classes = useStyles();
  const { queryID } = useParams();
  // const [instanceData, setInstanceData] = useState<InstanceData>({
  //   outputMetrics: 'Loading...',
  //   queryIDs: 'Loading...',
  //   timeStamp: 'Loading...',
  //   queryString: 'Loading...',
  // });

  // function getInstanceData(): void {
  //   fetch(`/api/logs/display/${queryID}`)
  //     .then((res) => res.json())
  //     .then((data) => setInstanceData(data));
  // }

  useEffect(() => {
    props.thunkQuery(queryID);
  }, []);


  // const {
  //   outputMetrics, queryIDs, timeStamp,
  // } = props.instanceData[queryID];

  return (
    !props.instanceData[queryID] ? (<div />)
      : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time Stamp</TableCell>
                <TableCell align="right">Total Time Duration&nbsp;(ms)</TableCell>
                <TableCell align="right">Graph</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { Array.isArray(props.instanceData[queryID].outputMetrics) && props.instanceData[queryID].outputMetrics.map((om: any, index: number) => (
                <TableRow key={om.startTime}>
                  <TableCell component="th" scope="row">
                    {props.instanceData[queryID].timeStamp[index]}
                  </TableCell>
                  <TableCell align="right">{om.duration / 1000000}</TableCell>
                  <TableCell align="right"><Link to={`/analytics/${queryID}/${props.instanceData[queryID].queryIDs[index]}`}>Resolver Breakdown</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
  );
};

export default connect(
  mapStateToProps,
  { setInstance, thunkQuery },
)(QueryTable);
