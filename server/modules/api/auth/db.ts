import { Pool } from 'pg';

require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.USER_DATABASE,
});

export { pool as db };
