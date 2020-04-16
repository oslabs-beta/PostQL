import * as React from 'react';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/application.scss';

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



function SimpleTable() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>query</TableCell>
            <TableCell align="right">Query Structure</TableCell>
            <TableCell align="right"># of Times Run</TableCell>
            <TableCell align="right">Total Time of Last Instance&nbsp;(ms)</TableCell>
            <TableCell align="right">Timestamp of Last Run&nbsp;(XX)</TableCell>
            <TableCell align="right">More Analytics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.content.body.map(((row) => (
            <TableRow key={row.query}>
              <TableCell component="th" scope="row">
                {row.query}
              </TableCell>
              <TableCell align="right">{row.structure}</TableCell>
              <TableCell align="right">{row.timesRun}</TableCell>
              <TableCell align="right">{row.lastTime}</TableCell>
              <TableCell align="right">{row.timestamp}</TableCell>
              <TableCell align="right"><Link to={`${path}/${row.query}`}>{row.query}</Link></TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleTable;

const data = {
  content: {
    body: [
      {
        query: 'query1',
        structure: 'xxxxxxxxxxxxx',
        timesRun: 3,
        lastTime: 300,
        timestamp: 1000,
      },
      {
        query: 'query2',
        structure: 'xxxxxxxxxxxxx',
        timesRun: 3,
        lastTime: 300,
        timestamp: 1000,
      },
      {
        query: 'query3',
        structure: 'xxxxxxxxxxxxx',
        timesRun: 3,
        lastTime: 300,
        timestamp: 1000,
      },
    ],
  },
};
