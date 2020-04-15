import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.USER_DATABASE,
});

export { pool as db };
