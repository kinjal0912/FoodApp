import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
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
