import React, { FC, useEffect, useState } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';

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

const QueryTable: FC = () => {
  const classes = useStyles();
  const { queryID } = useParams();
  const [instanceData, setInstanceData] = useState<InstanceData>({
    outputMetrics: 'Loading...',
    queryIDs: 'Loading...',
    timeStamp: 'Loading...',
    queryString: 'Loading...',
  });

  function getInstanceData(): void {
    fetch(`/api/logs/display/${queryID}`)
      .then((res) => res.json())
      .then((data) => setInstanceData(data));
  }

  useEffect(() => {
    getInstanceData();
  }, []);

  const {
    outputMetrics, queryIDs, timeStamp,
  } = instanceData;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TimeStamp</TableCell>
            <TableCell align="right">Total Time duration&nbsp;(ms)</TableCell>
            <TableCell align="right">Graph</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { Array.isArray(outputMetrics) && outputMetrics.map((om: any, index: number) => (
            <TableRow key={om.startTime}>
              <TableCell component="th" scope="row">
                {timeStamp[index]}
              </TableCell>
              <TableCell align="right">{om.duration / 1000000}</TableCell>
              <TableCell align="right"><Link to={`/analytics/${queryID}/${queryIDs[index]}`}>Resolver Breakdown</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueryTable;
