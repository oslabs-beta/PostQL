import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../store';
import { setInstance } from '../../../store/query/actions';
import Graph from './Compare';

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

const thunkQuery = (
  queryID: string,
): ThunkAction<void, AppState, null, Action<string>> => async (
  dispatch,
  getState,
) => {
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
  const [compare, setCompare] = useState<{ [key: string]: boolean }>({});
  const [inp, setInp] = useState<boolean[]>([]);
  console.log(compare);

  const inputs: boolean[] = [...inp];

  function addtoCompare(instanceId: string, index: number): void {
    const temp: { [key: string]: boolean } = { ...compare };
    if (compare[instanceId]) {
      inputs[index] = false;
      delete temp[instanceId];
      setCompare(temp);
      setInp(inputs);
    } else if (Object.keys(compare).length < 2) {
      inputs[index] = true;
      temp[instanceId] = true;
      setCompare(temp);
      setInp(inputs);
    }
  }

  // iterate through instanceIDs, if true in compare, add text and google charts

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
    console.log('propsinstance', props.instanceData);
    console.log(queryID);
    props.thunkQuery(queryID);
  }, []);

  function canAdd(): boolean {
    if (Object.keys(compare).length === 2) {
      console.log('You cannot add more than 2 instances to compare!');
      return false;
    }
    return true;
  }

  // const {
  //   outputMetrics, queryIDs, timeStamp,
  // } = props.instanceData[queryID];

  return !props.instanceData[queryID] ? (
    <div />
  ) : (
  // <div>{
  //   for(let instanceID in compare) {
  //     if (compare[instanceID] === true) {
  //       return (
  //         <h3></h3>
  //       )
  //     }
  //   }
  // } </div>
  // object.keys.map
  // filter object[key]
  // props.queryID1
    <div>
      <div>{ Object.keys(compare).filter((id) => compare[id]).map((id: string) => <Graph instanceID={id} />)}      </div>
      {/* <Graph /> */}
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Compare</TableCell>
              <TableCell>TimeStamp</TableCell>
              <TableCell align="right">Total Time duration&nbsp;(ms)</TableCell>
              <TableCell align="right">Graph</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(props.instanceData[queryID].outputMetrics)
            && props.instanceData[queryID].outputMetrics.map(
              (om: any, index: number) => {
                if (inp.length === 0) inputs[index] = false;
                return (
                  <TableRow key={om.startTime}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={inp.length > 0 ? inp[index] : inputs[index]}
                        onChange={(): void => {
                          addtoCompare(
                            props.instanceData[queryID].queryIDs[index],
                            index,
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {props.instanceData[queryID].timeStamp[index]}
                    </TableCell>
                    <TableCell align="right">{om.duration / 1000000}</TableCell>
                    <TableCell align="right">
                      <Link
                        to={`/analytics/${queryID}/${props.instanceData[queryID].queryIDs[index]}`}
                      >
                        Resolver Breakdown
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              },
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect(mapStateToProps, { setInstance, thunkQuery })(
  QueryTable,
);
