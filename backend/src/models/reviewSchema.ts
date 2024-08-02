import mongoose, { Document, Schema, Model, model } from "mongoose";

interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  order: mongoose.Types.ObjectId;
  rating: number;
  comment?: string;
  images?: string[];
  reviewDate: Date;
}

const reviewSchema = new Schema<IReview>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  images: [{ type: String }],
  reviewDate: { type: Date, default: Date.now },
});

export const Review: Model<IReview> = model<IReview>("Review", reviewSchema);
