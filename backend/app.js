import cookieParser from "cookie-parser";
import express from "express";

import auth from "./routes/auth.js";

const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);

// Routers
app.use("/auth", auth);
app.use((req, res) => {
    res.status(404).json({error: "Endpoint not found"});
});

app.listen(8000, (error) => {
    if (error) console.log(error);
    console.log(`Server running on http://localhost:8000`);
});
