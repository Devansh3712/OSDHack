import express from "express";

import { verifyToken } from "../controllers/jwt.js";
import { getUser } from "../controllers/user.js";

const user = express.Router();

user.get("/", verifyToken, getUser);

export default user;
