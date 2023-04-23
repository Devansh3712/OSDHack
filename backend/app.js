import express from "express";

import auth from "./routes/auth.js";
import user from "./routes/user.js";
import journal from "./routes/journal.js";
import therapist from "./routes/therapist.js";
import supportGroup from "./routes/supportGroup.js"

const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routers
app.use("/auth", auth);
app.use("/user", user);
app.use("/journal", journal);
app.use("/therapist", therapist);
app.use("/support-group", supportGroup);
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

app.listen(8000, (error) => {
    if (error) console.log(error);
    console.log(`Server running on http://localhost:8000`);
});
