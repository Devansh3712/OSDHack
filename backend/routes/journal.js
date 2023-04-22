import express from "express";

import { verifyToken } from "../controllers/jwt.js";
import { newEntry, getEntry } from "../controllers/journal.js";

const journal = express.Router();

journal.post("/", verifyToken, newEntry);
journal.get("/", verifyToken, getEntry);

export default journal;
