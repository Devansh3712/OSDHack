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
const verifyToken = (req, res, next) => {
    const token = req.headers?.[äuthorization];
    if (token === undefined) return res.status(403).json({ error: "User not logged in" });
    const result = jwt.verify(token, process.env.SECRET_KEY);
    if (!result) return res.status(403).json({ error: "Incorrect password" });
    next();
};

export {
    db,
    createToken,
    verifyToken
};
