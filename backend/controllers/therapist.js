import dotenv from "dotenv";
import mysql from "mysql";

import db from "./db.js";
import { getUserIdByToken } from "./jwt.js";

dotenv.config();

const getTherapist = async (req, res) => {
    const { city } = req.body;
    const sql = "SELECT * FROM therapist WHERE city = ?";
    const query = mysql.format(sql, [city]);
    db.query(query, (error, result) => {
        if (error)
            return res.status(400).json({ error: "Unable to find therapist" });
        return res.status(200).json({ data: result });
    });
};

export { getTherapist };
