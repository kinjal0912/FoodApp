import mongoose, { Document, Schema, Model, model } from "mongoose";

export interface IMenuItem extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  isVeg: boolean;
  isJainFriendly: boolean;
  ingredients: string[];
  isNonVeg: boolean;
}

export const menuItemSchema = new Schema<IMenuItem>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isVeg: { type: Boolean, required: true },
  isJainFriendly: { type: Boolean, required: true },
  ingredients: { type: [String], required: true },
  isNonVeg: { type: Boolean, required: true },
});

export const MenuItem: Model<IMenuItem> = model<IMenuItem>(
  "MenuItem",
  menuItemSchema
);
