import React, { FC, useState, useEffect } from 'react';

import Dashboard from './Dashboard';
import GetAuth from './Auth';
import { connect } from 'react-redux';
import { AppState } from "../store";
import { checkAuth } from '../store/auth/actions';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

const mapStateToProps = (state: AppState) => ({
  authed: state.authent.authed
});

interface AuthProps {
  checkAuth: typeof checkAuth;
  authed: boolean;
  thunkAuth: any;
}

const thunkAuth = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  fetch('/api/auth/validate')
  .then((res) => {
    console.log(res)
    if (res.status === 200) return dispatch(checkAuth({authed:true}));
    return dispatch(checkAuth({authed:false}));
  });
}

const App: FC<AuthProps> = (props: any) => {
  // const [authed, setAuthed] = useState(null);

  // function checkAuthed(): void {
  //   fetch('/api/auth/validate')
  //     .then((res) => {
  //       if (res.status === 200) return setAuthed(true);
  //       return setAuthed(false);
  //     });
  // }

  useEffect(() => {
    if (props.authed === false) props.thunkAuth();
  }, []);

  // if (props.authed === false) return <h1>Loading...</h1>;

  return (
    props.authed
      ? <Dashboard /> : <GetAuth />
  );
};

export default connect(
  mapStateToProps,
  { checkAuth, thunkAuth }
)(App);
