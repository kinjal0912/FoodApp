import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurantById,
  // getRestaurants,
  updateRestaurant,
} from "../controllers/restaurantController";

const restroRouter = express.Router();

restroRouter.post("/add", createRestaurant);
// restroRouter.get("/getrestro", getRestaurants);
restroRouter.get("/getrestro/:_id", getRestaurantById);
restroRouter.delete("/deleteRestro", deleteRestaurant);
restroRouter.put("/update-restro", updateRestaurant);
restroRouter.get("/search", getRestaurantById);

export default restroRouter;
