import React, { FC, useState } from 'react';

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function register(): void {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        type: 'register',
      }),
    })
      .then((res) => {
        if (res.status === 200) return window.location.reload();
        return res.json();
      })
      .then((data) => console.log(data.message));
  }

  return (
    <div className="form">
      <h2>Register</h2>
      <label htmlFor="username">Username</label>
      <input type="text" name="usernam" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="confirm">Confirm Password</label>
      <input type="password" name="confirm" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="submit" onClick={register}>Register</button>
    </div>
  );
};

export default Register;
