import express from "express";
import createCurrentUser from "../controllers/userControllers/createCurrentUser";
import { jwtCheck, jwtParse } from "../middleware/authentication/auth";
import { validateMyUserRequest } from "../middleware/validation/UserRequest";
import getCurrentUser from "../controllers/userControllers/getCurrentUser";
import updateCurrentUser from "../controllers/userControllers/updateCurrentUser";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getCurrentUser);
router.post("/", jwtCheck, jwtParse, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
