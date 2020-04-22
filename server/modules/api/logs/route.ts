import { Request, Response, NextFunction } from 'express';
import logController from './controller';
import { controller as authController } from '../auth/controller';

const express = require('express');

const logsRoute = express.Router();

logsRoute.get('/', (req, res) => res.status(200).json({ message: 'Logs route reached. Acheviement unlocked.' }));

logsRoute.get('/testadd', (req, res) => res.status(200).json({ message: 'NEW ROUTE TEST.' }));

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

logsRoute.delete('/:queryID', authController.validateUser, logController.deleteLog, (req, res) => {
  res.status(200).json({ message: 'Wait what?' });
});

// logsRoute.delete('/:queryID/:instanceID', authController.validateUser, logController.deleteInstance, (req, res) => {
//   res.status(200).json({ message: 'Instance has been deleted.' });
// });

export default logsRoute;
