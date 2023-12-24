import express from "express";
const router = express.Router();
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

// update user
router.put("/:id", verifyUser, updateUser);

// delete new user
router.delete("/:id", verifyUser, deleteUser);

// get single user
router.get("/:id", verifyUser, getSingleUser);

// get All user
router.get("/", verifyAdmin, getAllUser);

export default router;
