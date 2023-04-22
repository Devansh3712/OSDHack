import axios from "axios";
import dotenv from "dotenv";
import FormData from "form-data";
import mysql from "mysql";

import db from "./db.js";
import { getUserIdByToken } from "./jwt.js";

dotenv.config();

const sentimentAnalysis = async (text) => {
    const form = new FormData();
    form.append("text", text);
    form.append("api_key", process.env.PARALLELDOTS_API_KEY);
    return await axios({
        method: "POST",
        url: "https://apis.paralleldots.com/v4/sentiment",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => response.data);
};

const emotionAnalysis = async (text) => {
    const form = new FormData();
    form.append("text", text);
    form.append("api_key", process.env.PARALLELDOTS_API_KEY);
    return await axios({
        method: "POST",
        url: "https://apis.paralleldots.com/v4/emotion",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => response.data);
};

const newEntry = async (req, res) => {
    const token = req.headers["authorization"];
    const userId = await getUserIdByToken(token);
    const { content } = req.body;
    const sentiment = await sentimentAnalysis(content);
    const emotion = await emotionAnalysis(content);
    console.log(sentiment, emotion);
    const sql = "INSERT INTO journals SET ?";
    const values = {
        id: userId,
        content: content,
        createdOn: new Date(),
        sentiment: JSON.stringify(sentiment),
        emotion: JSON.stringify(emotion),
    };
    const query = mysql.format(sql, values);
    db.query(query, (error, result) => {
        if (error)
            return res.status(400).json({ error: "Unable to create journal." });
        return res
            .status(200)
            .json({ message: "Journal created successfully." });
    });
};

export { newEntry };
