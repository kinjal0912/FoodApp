import { Request, Response } from "express";
import { Restaurant } from "../../models/restaurant";

// Search and filter restaurants
export const searchRestaurants = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query;
    const restaurants = await Restaurant.find({
      $or: [
        { restaurantName: new RegExp(query as string, "i") },
        { city: new RegExp(query as string, "i") },
        { country: new RegExp(query as string, "i") },
        { cuisines: new RegExp(query as string, "i") },
      ],
    });
    res.status(200).json(restaurants);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
