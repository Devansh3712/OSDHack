import express from "express";

import { verifyToken } from "../controllers/jwt.js";
import { getSupportGroup } from "../controllers/supportGroup.js";

const supportGroup = express.Router();

supportGroup.get("/", verifyToken, getSupportGroup);

export default supportGroup;
