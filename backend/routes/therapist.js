import express from "express";

import { verifyToken } from "../controllers/jwt.js";
import { getTherapist } from "../controllers/therapist.js";

const therapist = express.Router();

therapist.get("/", verifyToken, getTherapist);

export default therapist;
