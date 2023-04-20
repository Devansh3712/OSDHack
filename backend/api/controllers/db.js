import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
db.connect();

export default db;
