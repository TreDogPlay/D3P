import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

console.log("🚀 DB_HOST:", process.env.DB_HOST);

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
export default pool;