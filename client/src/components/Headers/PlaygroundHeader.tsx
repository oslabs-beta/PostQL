import React, { FC, useState } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
} from '@material-ui/core';
// import  from '@material-ui/core/Toolbar';
// import  from '@material-ui/core/Typography';
// import  from '@material-ui/core/Button';
// import  from '@material-ui/core/IconButton';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#09141C',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const logout = (): void => {
  fetch('/api/auth/logout', {
    method: 'POST',
  })
    .then(() => window.location.reload());
};

const ButtonAppBar: FC = () => {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const history = useHistory();

  function automate(): void {
    fetch('/api/testing/automate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
      }),
    })
      .then((res) => {
        if (res.status === 200) history.push('/automatedTesting');
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <img className="headerLogo" src="../../image/Group3.png" />
            <Link to="/" className="analytics">Playground</Link>
            <Link to="/analytics" className="analytics">Analytics</Link>
            <TextField className="textfield2" id="url" label="Place url here" variant="filled" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button className="headerRight" type="submit" onClick={automate}>Automated Testing</button>
            <Typography className={classes.title} />
            <button className="headerRight" type="submit" onClick={logout}>Logout</button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default ButtonAppBar;
