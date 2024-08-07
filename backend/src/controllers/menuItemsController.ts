import { Request, Response } from "express";
import * as MenuItemService from "../services/menuItemsService";
import { validationResult } from "express-validator";

export const createMenuItem = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const menuItemData = req.body;
    const menuItem = await MenuItemService.createMenuItem(menuItemData);
    res.status(201).json(menuItem);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const menuItems = await MenuItemService.getMenuItems();
    res.status(200).json(menuItems);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export const getMenuItemById = async (req: Request, res: Response) => {
  try {
    const menuItem = await MenuItemService.getMenuItemById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ error: "MenuItem not found" });
    }
    res.status(200).json(menuItem);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const menuItem = await MenuItemService.updateMenuItem(req.params.id, req.body);
    if (!menuItem) {
      return res.status(404).json({ error: "MenuItem not found" });
    }
    res.status(200).json(menuItem);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem = await MenuItemService.deleteMenuItem(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ error: "MenuItem not found" });
    }
    res.status(200).json({ message: "MenuItem deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
};
