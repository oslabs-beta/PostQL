import express from 'express';

import { controller } from './controller';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Successfully pinged /api/auth' }));

router.post('/register', controller.validateFields, controller.doesUsernameExist, controller.doesEmailExist);

router.post('/login', controller.validateFields, controller.doesUsernameExist, controller.doesEmailExist);

export { router as auth };
