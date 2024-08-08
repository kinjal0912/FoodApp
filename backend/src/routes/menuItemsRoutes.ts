import express from "express";
import {
  createMenuItem,
  deleteMenuItem,
  getMenuItemById,
  getMenuItems,
  updateMenuItem,
} from "../controllers/menuItemsController";

const menuRouter = express.Router();

menuRouter.post("/addmenu", createMenuItem);
menuRouter.get("/getitems", getMenuItems);
menuRouter.get("/getitembyid/:id", getMenuItemById);
menuRouter.put("/updateitem/:id", updateMenuItem);
menuRouter.delete("/deleteitem/:id", deleteMenuItem);

export default menuRouter;
