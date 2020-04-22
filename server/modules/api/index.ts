// expose api endpoint
import express from 'express';

import { auth } from './auth';
import logs from './logs';
import testing from './testing';

const router = express.Router();

router.use('/auth', auth);
router.use('/logs', logs);
router.use('/testing', testing);

export default router;
