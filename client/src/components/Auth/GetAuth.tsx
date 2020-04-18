import React, { FC } from 'react';

import Login from './Login';
import Register from './Register';

const GetAuth: FC = () => (
  <div className = "getAuth">
  <div className="slim">
    <img className="loginLogo" src="../../image/Frame 41.png" />
    <Login />
    <Register />
  </div>
  </div>
);

export default GetAuth;
