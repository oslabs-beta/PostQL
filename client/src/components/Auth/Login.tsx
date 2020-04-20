import React, { FC, useState } from 'react';

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
      <label htmlFor="username">Username
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label htmlFor="password">Password
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit" onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
