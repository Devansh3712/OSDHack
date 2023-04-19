import express from "express";

import { signUp, logIn, logOut } from "../controllers/auth.js";

const auth = express.Router();

auth.post("/signup", signUp);
auth.post("/login", logIn);
auth.get("/logout", logOut);

export default auth;
