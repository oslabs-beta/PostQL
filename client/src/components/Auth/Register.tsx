import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const classes = useStyles();

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
      <form className={`${classes.root} form-padded`} noValidate autoComplete="off">
        <TextField id="username" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField type="password" id="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
        <TextField type="password" id="confirm" label=" Confirm Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </form>
      <button type="submit" onClick={register}>Register</button>
    </div>
  );
};

export default Register;
