import mongoose, { Document, Schema, Model, model } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  price: number;
}

export const menuItemSchema = new Schema<IMenuItem>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const MenuItem: Model<IMenuItem> = model<IMenuItem>(
  "MenuItem",
  menuItemSchema
);
