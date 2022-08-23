import { Router } from "express";
import { getOneUser, getAllUsers, createUser, deleteUser, updateUser } from "../controllers/user.controller.js";

export const router = Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getOneUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
