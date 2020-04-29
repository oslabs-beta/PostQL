import React, { FC, useState, useEffect } from 'react';
import {
  Link, useRouteMatch,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';

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

// const mapStateToProps = (state) => ({
//   URL: state.selectedWorkspace;
// });

// const mapDispatchToProps = (dispatch) => ({
// });

const QueryData: FC = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const [queryData, setQueryData] = useState([]);
  const getData = () => {
    fetch('/api/logs/display')
      .then((response) => response.json())
      .then((data) => setQueryData(data));
  };
  // Create State for Text Input
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  // results evaluates either to full queryData array or filtered array based on searchTerm value
  const results = !searchTerm ? queryData : queryData.filter((obj: any) => (
    obj.queryString.toLowerCase().includes(searchTerm.toLowerCase())));
    console.log(results[0]);
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
              <TableCell align="left">
                <input
                  type="text"
                  placeholder="Search Query"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell align="right">Query Type</TableCell>
              <TableCell align="right">Times Run</TableCell>
              <TableCell align="right">Total Time of Last Instance&nbsp;(ms)</TableCell>
              <TableCell align="right">Timestamp of Last Run&nbsp;(XX)</TableCell>
              <TableCell align="right">More Analytics</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((row: any) => (
              <TableRow key={row.queryString}>
                <TableCell component="th" scope="row">
                  {row.queryString}
                </TableCell>
                <TableCell align="right">{row.queryString.includes('query') ? 'Query' : 'Mutation'}</TableCell>
                <TableCell align="right">{row.counter}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
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
// export default connect(mapState, mapDispatch, null, { context: MyContext }) (QueryData);
