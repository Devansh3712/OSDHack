import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mysql from "mysql";

import db from "./db.js";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const createToken = (id) => jwt.sign({ id: id }, secretKey);

const getUserIdByToken = async (token) => {
    const userId = jwt.verify(token, secretKey).id;
    const sql = "SELECT * FROM users WHERE id = ?";
    const query = mysql.format(sql, [userId]);
    db.query(query, (error, result) => {
        if (error) return null;
    });
    return userId;
};

const verifyToken = async (req, res, next) => {
    const token = req.headers?.["authorization"];
    if (token === undefined) return res.status(400).json({ error: "Authorization token not found" });
    const valid = jwt.verify(token, secretKey);
    if (!valid) return res.status(403).json({ error: "Invalid authorization token" });
    if (await getUserIdByToken(token) === null) return res.status(403).json({ error: "User not found" });
    next();
};

export {
    createToken,
    getUserIdByToken,
    verifyToken
};
