import mysql from "mysql";

import db from "./db.js";
import { getUserIdByToken } from "./jwt.js";

const getUser = (req, res) => {
    const token = req.headers?.["authorization"];
    const userId = getUserIdByToken(token);
    const sql = "SELECT * FROM users WHERE id = ?";
    const query = mysql.format(sql, [userId]);
    db.query(query, (error, result) => {
        if (error) return res.status(400).json({ error: "Unable to fetch user data" });
        return res.status(200).json({ data: result[0] });
    });
};

export { getUser };
