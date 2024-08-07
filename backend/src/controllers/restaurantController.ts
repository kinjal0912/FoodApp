import { Request, Response } from "express";
import * as RestaurantService from "../services/restaurantService";

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantData = req.body;
    const restaurant = await RestaurantService.createRestaurant(restaurantData);
    res.status(201).json(restaurant);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred! Internal" });
    }
  }
};

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantService.getRestaurants();
    res.status(200).json(restaurants);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred! Internal" });
    }
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const restaurant = await RestaurantService.getRestaurantById(req.params._id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await RestaurantService.updateRestaurant(
      req.params.id,
      req.body
    );
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred! Internal" });
    }
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await RestaurantService.deleteRestaurant(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred! Internal" });
    }
  }
};
