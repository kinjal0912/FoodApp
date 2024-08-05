import express from "express";
import {
  addRestaurant,
  deleteRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../controllers/restaurantControllers/restaurantController";

const restroRouter = express.Router();

restroRouter.post("/", addRestaurant);
restroRouter.get("/getrestro", getRestaurant);
restroRouter.delete("/deleteRestro", deleteRestaurant);
restroRouter.put("/update-restro", updateRestaurant);

export default restroRouter;
