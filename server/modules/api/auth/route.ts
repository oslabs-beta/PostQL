import express from 'express';

import { controller } from './controller';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Successfully pinged /api/auth' }));

router.post('/register', controller.validateFields, controller.doesUsernameExist, controller.doesEmailExist, controller.createUser, controller.createSession, (req, res) => res.status(200).json({ message: 'Registraton is successful.' }));

router.post('/login', controller.validateFields, controller.doesUsernameExist, controller.doesEmailExist, controller.checkLogin, controller.createSession, (req, res) => res.status(200).json({ message: 'Log in successful.' }));

router.get('/validate', controller.validateUser, (req, res) => res.status(200).json({ message: 'User successfully validated.', username: res.locals.username }));

router.post('/logout', controller.logout, (req, res) => res.status(200).json({ message: 'Successfully logged out.' }));

if (process.env.NODE_ENV === 'test') {
  router.delete('/user', controller.deleteUser, (req, res) => res.status(200).json({ message: 'Deleted user successfully.' }));
}

export { router as auth };
