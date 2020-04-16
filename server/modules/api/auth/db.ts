import { Pool } from 'pg';
import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

const pool = new Pool({
  connectionString: process.env.USER_DATABASE,
});

export { pool as db };
