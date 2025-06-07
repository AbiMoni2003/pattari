import express from "express"
import { createUser, listAllUSer } from "../controllers/register.controller.js";
import { resetPass } from "../controllers/resetPassword.controller.js";
import { loginUser } from "../controllers/login.controller.js";

const router = express.Router();

router.post("/register",createUser);

router.get("/listall",listAllUSer);

router.put("/reset",resetPass);

router.post("/login",loginUser);



export default router;
