import mysql from "mysql";

import db from "./db.js";

const getSupportGroup = async (req, res) => {
    const { city } = req.body;
    const sql = "SELECT * FROM support_group WHERE city = ?";
    const query = mysql.format(sql, [city]);
    db.query(query, (error, result) => {
        if (error)
            return res.status(400).json({ error: "Unable to find a support group" });
        return res.status(200).json({ data: result });
    });
};

export { getSupportGroup };
