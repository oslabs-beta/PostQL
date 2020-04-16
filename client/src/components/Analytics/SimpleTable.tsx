import React, { FC, useState } from 'react';
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


const SimpleTable: FC = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  // const [query] = useState("");
  // const getData = () => {
  //   fetch('/api/logs/display')
  //     .then((response) => response.json());
  //     .then((data) => {
  //         this.useState({});;
  // };

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
};


// const requestOptions = {
//   method: 'POST',
//   headers: new Headers({'Content-Type': 'application/json'}),
//   body: JSON.stringify({username:username,password:password}),
// //   redirect: 'follow'
// };

//     fetch('http://localhost:3000/products', requestOptions)
//     .then((response) =>{
//         return response.json()
//     }).then((data) => {
//         this.setState({...this.state,products:data});
//     })

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
