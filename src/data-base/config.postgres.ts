import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.NAME_DB,
});
try {
  console.log("Connected to the database PostgreSQL");
} catch (error) {
  console.log("Error connecting to the database");
}
