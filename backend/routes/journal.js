import express from "express";

import { verifyToken } from "../controllers/jwt.js";
import { newEntry } from "../controllers/journal.js";

const journal = express.Router();

journal.post("/", verifyToken, newEntry);

export default journal;
