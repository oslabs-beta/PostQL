import React, { FC, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login(): void {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
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
        console.log(data.message);
      });
  }

  return (
    <div className="form">
      <h2>Login</h2>
      <TextField className="textfield" id="username" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField className="textfield" type="password" id="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="loginButton" type="submit" onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
