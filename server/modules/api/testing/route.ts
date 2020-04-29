import { Request, Response, NextFunction } from 'express';
import testingController from './controller';
import { controller as authController } from '../auth/controller';

const express = require('express');

const logsRoute = express.Router();

logsRoute.get('/', (req, res) => res.status(200).json({ message: 'Testing route reached. Acheviement unlocked.' }));

// authentication is required before any further action
logsRoute.get('/getAllTypes', authController.validateUser, testingController.findAllTypes, (req, res) => {
  res.status(200).json({ message: 'Types and schema has all been found.' });
});

logsRoute.post('/automate', testingController.fetchURL, testingController.getData, testingController.findAllTypes, (req, res) => {
  res.status(200).json({ message: 'Types and schema has all been found.' });
});

export default logsRoute;
