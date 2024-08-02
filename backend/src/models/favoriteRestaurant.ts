import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IFavoriteRestaurant extends Document {
  user: mongoose.Types.ObjectId;
  restaurant: mongoose.Types.ObjectId;
}

const favoriteRestaurantSchema = new Schema<IFavoriteRestaurant>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

export const FavoriteRestaurant: Model<IFavoriteRestaurant> =
  model<IFavoriteRestaurant>("FavoriteRestaurant", favoriteRestaurantSchema);
