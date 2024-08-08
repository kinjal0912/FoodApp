import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurant extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  contactNumber: number;
  cuisineType: string[];
  isOpen: boolean;
  isVeg: boolean;
  isNonVeg: boolean;
  openingTime: string; // Format: "HH:mm"
  closingTime: string; // Format: "HH:mm"
  menuItems: mongoose.Types.ObjectId[];
}

const RestaurantSchema: Schema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  cuisineType: { type: [String] },
  isOpen: { type: Boolean, default: true },
  isVeg: { type: Boolean, default: true },
  isNonVeg: { type: Boolean, default: false },
  openingTime: {
    type: String,
    required: true,
    match: /^([0-1]\d|2[0-3]):([0-5]\d)$/,
  },
  closingTime: {
    type: String,
    required: true,
    match: /^([0-1]\d|2[0-3]):([0-5]\d)$/,
  },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
});

export default mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);
