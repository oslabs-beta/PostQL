import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { AppState } from "../../store";
import { getRegister } from '../../store/register/actions';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';


const mapStateToProps = (state: AppState) => ({
  username: state.reg.username,
  email: state.reg.email,
  password: state.reg.password,
  confirmPassword: state.reg.confirmPassword
});

interface RegisterProps {
  getRegister: typeof getRegister;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  thunkRegister: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const thunkRegister = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            type: 'register',
          }),
        })
          .then((res) => {
            if (res.status === 200) return window.location.reload();
            return res.json();
          })
          .then((data) => console.log(data.message));
 
}

const Register: FC<RegisterProps> = (props: any) => {
  const classes = useStyles();

  // axios
  // .post('/api/auth/register', {
  //   username,
  //   email,
  //   password,
  //   confirmPassword
  // })
  // .then((res) => {
  //   if (res.status === 200) return window.location.reload();
  //   return res.data();
  // })
  // .then((data) => console.log(data.message));

  return (
    <div className="form">
      <h2>Register</h2>
      <TextField id="username" label="Username" variant="outlined" value={props.username} onChange={(e) => props.getRegister({username: e.target.value})} />
      <TextField id="email" label="Email" variant="outlined" value={props.email} onChange={(e) => props.getRegister({email: e.target.value})} />
      <TextField type="password" id="password" label="Password" variant="outlined" value={props.password} onChange={(e) => props.getRegister({password: e.target.value})} />
      <TextField type="password" id="confirm" label=" Confirm Password" variant="outlined" value={props.confirmPassword} onChange={(e) => props.getRegister({confirmPassword:e.target.value})} />
      <button className="loginButton" type="submit" onClick={(e) => props.thunkRegister(props.username,props.email,props.password,props.confirmPassword)}>Register</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getRegister, thunkRegister }
)(Register);
