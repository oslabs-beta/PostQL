import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';
import '../../styles/application.scss';

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


const SimpleTable: FC = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TimeStamp</TableCell>
            <TableCell align="right">Total Time duration&nbsp;(ms)</TableCell>
            <TableCell align="right">D3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.content.body.map(((row) => (
            <TableRow key={row.query}>
              <TableCell component="th" scope="row">
                {row.timestamp}
              </TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right"><Link to={`/analytics/${row.query}`}>{row.query}</Link></TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;

const data = {
  content: {
    body: [
      {
        query: 'query1',
        timestamp: 1000,
        duration: 700,
      },
      {
        query: 'query1',
        timestamp: 1100,
        duration: 800,
      },
      {
        query: 'query2',
        timestamp: 1200,
        duartion: 400,
      },
    ],
  },
};
