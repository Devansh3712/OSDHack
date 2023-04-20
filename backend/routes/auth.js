import express from "express";

import { signUp, logIn } from "../controllers/auth.js";

const auth = express.Router();

auth.post("/signup", signUp);
auth.post("/login", logIn);

export default auth;
