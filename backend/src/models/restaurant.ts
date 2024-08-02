import mongoose, { Document, Schema, Model, model } from "mongoose";
import { menuItemSchema, IMenuItem } from "../models/menuItems";

interface IRestaurant extends Document {
  user: mongoose.Types.ObjectId;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: IMenuItem[];
  imageUrl: string;
  lastUpdated: Date;
}

const restaurantSchema = new Schema<IRestaurant>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  restaurantName: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  deliveryPrice: { type: Number, required: true },
  estimatedDeliveryTime: { type: Number, required: true },
  cuisines: [{ type: String, required: true }],
  menuItems: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

export const Restaurant: Model<IRestaurant> = model<IRestaurant>(
  "Restaurant",
  restaurantSchema
);
