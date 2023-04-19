import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mysql from "mysql";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
db.connect();

const createToken = (id) => jwt.sign({ id: id }, process.env.SECRET_KEY);
const verifyToken = (token) => jwt.verify(token, process.env.SECRET_KEY);

export {
    db,
    createToken,
    verifyToken
};
