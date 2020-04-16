import express from 'express';
import logController from './controller';
import { controller as authController } from '../auth/controller';

const logsRoute = express.Router();

logsRoute.get('/', (req, res) => res.status(200).json({ message: 'Logs route reached. Acheviement unlocked.' }));

// authentication is required before any further action

logsRoute.post('/add', authController.validateUser, logController.findUser, logController.addLog, (req, res) => {
  res.status(200).json({ message: 'Log has been successfully added.' });
});

logsRoute.get('/display', authController.validateUser, logController.displayLogs, (req, res) => {
  res.status(200).json(res.locals.logs);
});

logsRoute.get('/display/:queryID', authController.validateUser, logController.displayLog, (req, res) => {
  res.status(200).json(res.locals.log);
});

logsRoute.get('/display/:queryID/:instanceID', authController.validateUser, logController.displayInstance, (req, res) => {
  res.status(200).json(res.locals.instance);
});

export default logsRoute;
