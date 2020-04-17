import React, { FC } from 'react';

import Login from './Login';
import Register from './Register';

const GetAuth: FC = () => (
  <div className="slim">

    <img className="loginLogo" src="../../image/Group3.png" />
    <Login />
    <Register />
  </div>
);

export default GetAuth;
