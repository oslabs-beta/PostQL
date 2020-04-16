import express from 'express';
import logController from './controller';

const logsRoute = express.Router();

logsRoute.get('/', (req, res) => res.status(200).json({ message: 'Logs route reached. Acheviement unlocked.' }));

logsRoute.post('/add', logController.validateUser, logController.addLog, (req, res) => {
  res.status(200).json({ message: 'Log has been successfully added.' });
});

logsRoute.get('/display', logController.validateUser, logController.displayLogs, (req, res) => {
  res.status(200).json(res.locals.logs);
});

logsRoute.get('/display/:queryID', logController.validateUser, logController.displayLog, (req, res) => {
  res.status(200).json(res.locals.log);
});

export default logsRoute;
