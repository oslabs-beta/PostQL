import express from 'express';

import { controller } from './controller';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Successfully pinged /api/auth' }));

router.post('/register', (req, res) => res.status(200).json({ message: 'Pinged /register' }));

router.post('/login', controller.validateFields);

export { router as auth };
