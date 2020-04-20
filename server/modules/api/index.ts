// expose api endpoint
import express from 'express';

import { auth } from './auth';
import logs from './logs';

const router = express.Router();

router.use('/auth', auth);
router.use('/logs', logs);

export default router;
