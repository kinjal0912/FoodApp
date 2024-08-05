import express from "express";
import createCurrentUser from "../controllers/restaurantControllers/userControllers/createCurrentUser";


const router = express.Router();

router.get("/", getCurrentUser);
router.post("/", createCurrentUser);
router.put("/", updateCurrentUser);

export default router;
