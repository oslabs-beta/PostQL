import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Register from './Register';
import Login from './Login';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard: FC = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} padded-card`}>
      <CardContent>
        <img className="loginLogo" src="../../image/title.png" />
        <Login />
        <Register />
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
