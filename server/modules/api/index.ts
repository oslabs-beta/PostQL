// expose api endpoint
import express from 'express';

import { auth } from './auth';

const router = express.Router();


router.use('/auth', auth);

export { router as api };
