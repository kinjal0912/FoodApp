import express from "express";
import authMiddleware from "../middleware/authentication/authMiddleware";
import {
  deleteUser,
  getUserDetails,
  signIn,
  signUp,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.put("/update", authMiddleware, updateUser);
router.delete("/delete", authMiddleware, deleteUser);
router.get("/getuser", authMiddleware, getUserDetails);

export default router;
