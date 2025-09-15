import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

// Create a user
router.post("/user", UserController.createdUser);

// Fetch all users
router.get("/user", UserController.fetchUser);

// Update a user by ID
router.put("/user/:userId", UserController.updateUser);

// Delete a user by ID
router.delete("/user/:userId", UserController.deleteUser);

export const UserRouter = router;
