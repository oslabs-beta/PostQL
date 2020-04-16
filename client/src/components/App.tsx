import React, { FC, useState, useEffect } from 'react';

import Dashboard from './Dashboard';
import { Login } from './Auth';

const App: FC = () => {
  const [authed, setAuthed] = useState(null);

  function checkAuthed(): void {
    fetch('/api/auth/validate')
      .then((res) => {
        if (res.status === 200) return setAuthed(true);
        return setAuthed(false);
      });
  }

  useEffect(() => {
    if (authed === null) checkAuthed();
  }, []);

  if (authed === null) return <h1>Loading...</h1>;

  return (
    authed
      ? <Dashboard /> : <Login />
  );
};

export default App;
