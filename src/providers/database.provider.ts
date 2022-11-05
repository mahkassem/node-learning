import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export const db: Pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT as string) ?? 5432,
});

export default db;