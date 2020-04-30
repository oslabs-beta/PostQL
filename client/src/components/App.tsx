import React, { FC, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import Dashboard from './Dashboard';
import GetAuth from './Auth';
import { AppState } from '../store';
import { checkAuth } from '../store/auth/actions';

const mapStateToProps = (state: AppState) => ({
  authed: state.authent.authed,
});

interface AuthProps {
  checkAuth: typeof checkAuth;
  authed: boolean;
  thunkAuth: any;
}

const thunkAuth = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  fetch('/api/auth/validate')
    .then((res) => {
      console.log(res);
      if (res.status === 200) return dispatch(checkAuth({ authed: true }));
      return dispatch(checkAuth({ authed: false }));
    });
};

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
    if (props.authed === null) props.thunkAuth();
  }, []);

  if (props.authed === null) return <h1>Loading...</h1>;

  return (
    props.authed
      ? <Dashboard /> : <GetAuth />
  );
};

export default connect(
  mapStateToProps,
  { checkAuth, thunkAuth },
)(App);
