import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import process from 'process';
import { exec } from 'child_process';

import modules from './modules';

const app = express();

if (process.env.NODE_ENV === 'production') {
  const secure = require('express-force-https');
  app.use(secure);
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/image', express.static(path.join(__dirname, './images')));
app.use('/api', modules.api);

app.listen(5000); // listens on port 80 -> http://localhost/

// catch all
app.use('*', (req, res, next) => {
  next({
    code: 404,
    message: 'Sorry - this resource cannot be found.',
    log: `User failed request: ${req.method} - ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  // err MUST be in format:
  // { code: status code, message: message to user, log: message to server operator }
  console.log(err.log);
  return res.status(err.code).json({ message: err.message });
});

module.exports = app;

if (process.env.NODE_ENV === 'development') {
  process.on('exit', () => {
    exec('docker-compose down');
  });
}
