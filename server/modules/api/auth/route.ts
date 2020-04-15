import express from 'express';

import { controller } from './controller';

require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Successfully pinged /api/auth' }));

router.post('/register', controller.validateFields, controller.doesUsernameExist);

router.post('/login', controller.validateFields, controller.doesUsernameExist);

export { router as auth };
