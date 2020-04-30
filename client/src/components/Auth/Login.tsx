import React, { FC, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { AppState } from "../../store";
import { getLogin } from '../../store/login/actions';
import { LogIn } from '../../store/login/types';

const mapStateToProps = (state: AppState) => ({
  username: state.log.username,
  password: state.log.password,
});

interface LoginProps {
  getLogin: typeof getLogin;
  username: string;
  password: string;
}

const Login: FC<LoginProps> = (props: any) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  function login(): void {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: props.username,
        password: props.password,
        type: 'login',
      }),
    })
      .then((res) => {
        if (res.status === 200) window.location.reload();
        else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  }


  return (
    <div className="form">
      <h2>Login</h2>
      <TextField className="textfield" id="username" label="Username" variant="outlined" value={props.username} onChange={(e) => props.getLogin({username: e.target.value})} />
      <TextField className="textfield" type="password" id="password" label="Password" variant="outlined" value={props.password} onChange={(e) => props.getLogin({password: e.target.value})} />
      <button className="loginButton" type="submit" onClick={login}>Log in</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getLogin }
)(Login);
