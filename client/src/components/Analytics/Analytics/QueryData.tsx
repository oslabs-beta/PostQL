import React, { FC, useState, useEffect } from 'react';
import {
  Link, useRouteMatch,
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
  structure: string;
  timesRun: number;
  lastTime: number;
  timestamp: number;
  link: string;
}


const QueryData: FC = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const [queryData, setQueryData] = useState([]);
  const getData = () => {
    fetch('/api/logs/display')
      .then((response) => response.json())
      .then((data) => setQueryData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="split">
        <h2 className="analyticstitle">Performance Analytics</h2>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>query</TableCell>
              <TableCell align="right">Query Type</TableCell>
              <TableCell align="right"># of Times Run</TableCell>
              <TableCell align="right">Total Time of Last Instance&nbsp;(ms)</TableCell>
              <TableCell align="right">Timestamp of Last Run&nbsp;(XX)</TableCell>
              <TableCell align="right">More Analytics</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queryData.map((row) => (
              <TableRow key={row.queryString}>
                <TableCell component="th" scope="row">
                  {row.queryString}
                </TableCell>
                <TableCell align="right">{row.queryString.includes('query') ? 'Query' : 'Mutation'}</TableCell>
                <TableCell align="right">{row.counter}</TableCell>
                <TableCell align="right">Duration of last run</TableCell>
                <TableCell align="right">{row.timeStamp}</TableCell>
                <TableCell align="right"><Link to={`${path}/${row._id}`}>More Details</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QueryData;
