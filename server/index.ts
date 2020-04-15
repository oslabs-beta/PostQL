import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import process from 'process';
import { exec } from 'child_process';

import { modules } from './modules';

const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/image', express.static(path.join(__dirname, '../client/src/image')));
app.use('/api', modules.api);

// serve bundle.js in prod for every url
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // app.use('/emails/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.listen(80); // listens on port 80 -> http://localhost/
} else if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // console.log(`Listening on http://localhost:${PORT}`);
  });
}

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
