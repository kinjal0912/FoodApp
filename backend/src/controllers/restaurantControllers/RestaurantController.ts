import { Request, Response } from "express";
import restaurantService from "../../services/restaurantService";

export const addRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding restaurant" });
  }
};

export const getRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurantService.getRestaurant(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching restaurant" });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await restaurantService.deleteRestaurant(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting restaurant" });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await restaurantService.updateRestaurant(
      id,
      req.body
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating restaurant" });
  }
};
