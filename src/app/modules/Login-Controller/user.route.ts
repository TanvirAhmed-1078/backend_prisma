import { Router } from "express";
import { loginUser } from "./Login_Controller";

const router = Router();

router.post("/login", loginUser);

export const UserLoginRouter = router;
