import axios from "axios";
import dotenv from "dotenv";
import FormData from 'form-data';
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
    })
        .then((response) => response.data)
}

const emotionAnalysis = async (text) => {
    const form = new FormData();
    form.append("text", text);
    form.append("api_key", process.env.PARALLELDOTS_API_KEY);
    return await axios({
        method: "POST",
        url: "https://apis.paralleldots.com/v4/emotion",
        data: form,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then((response) => response.data)
}
