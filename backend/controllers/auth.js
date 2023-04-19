import bcrypt from "bcrypt";
import mysql from "mysql";
import { v4 } from "uuid";

import { db, createToken } from "./config.js";

const signUp = (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users SET ?";
    const values = {
        name: name,
        email: email,
        id: v4().replaceAll("-", ""),
        password: bcrypt.hashSync(password, 10),
        createdOn: new Date()
    };
    const query = mysql.format(sql, values);
    db.query(query, (error, result) => {
        if (error) {
            res.status(400).json({ error: "Unable to create user" });
        } else {
            res.status(200).json({ message: "User created successfully" });
        };
    });
};

const logIn = (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    const query = mysql.format(sql, [email]);
    db.query(query, (error, result) => {
        if (error) {
            res.status(404).json({ error: "User not found" });
        } else {
            const valid = bcrypt.compareSync(password, result[0].password);
            if (!valid) {
                res.status(403).json({ error: "Incorrect password" });
            } else {
                const token = createToken(result[0].id);
                res.cookie("authorization", token);
                res.status(200).json({ message: "User logged in" });
            };
        };
    });
};

const logOut = (req, res) => {
    if (req.cookie?.["authorization"] != undefined) {
        res.clearCookie("authorization");
        res.status(200).json({ message: "User logged out" });
    } else {
        res.status(403).json({ message: "User not logged in" });
    };
};

export {
    signUp,
    logIn,
    logOut
};
