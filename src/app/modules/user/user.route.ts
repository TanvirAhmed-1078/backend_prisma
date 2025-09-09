import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

// Create a user
router.post("/", UserController.createdUser);

// Fetch all users
router.get("/", UserController.fetchUser);

// Update a user by ID
router.put("/:userId", UserController.updateUser);

// Delete a user by ID
router.delete("/:userId", UserController.deleteUser);

export const UserRouter = router;
