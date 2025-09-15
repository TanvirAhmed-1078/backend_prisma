import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { UserLoginRouter } from "../modules/Login-Controller/user.route";

const router = Router();

const allRouters = [UserRouter, UserLoginRouter];

allRouters.forEach((route) => router.use(route));

export const BaseRouter = router;
