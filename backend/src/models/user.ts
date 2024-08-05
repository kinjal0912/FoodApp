import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  contactNo: {
    type: Number,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "restaurant", "buyer", "delivery"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
