import React, { FC } from 'react';

import Login from './Login';
import Register from './Register';
import SimpleCard from './LoginSignupCard';

const GetAuth: FC = () => (
  <div className="loginBody">
    <div className="getAuth">
      <SimpleCard />
    </div>
  </div>
);

export default GetAuth;
