import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

const app = express();
const PORT = 3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// serve up static files from webpack
app.use('/build', express.static(path.join(__dirname, '../../build')));

// serve index.html on the route '/'
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

// global error handler:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = { ...defaultErr, ...err };
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);

export default app;
