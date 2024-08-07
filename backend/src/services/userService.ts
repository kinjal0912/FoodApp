import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

export const signUp = async (data: any) => {
  const {
    email,
    password,
    name,
    contactNo,
    addressLine1,
    city,
    country,
    role,
  } = data;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    name,
    contactNo,
    addressLine1,
    city,
    country,
    role: role || "buyer",
  });

  await user.save();
  return user;
};

export const signIn = async (data: any) => {
  const { email, password } = data;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  return token;
};

export const getUserDetails = async (userId: string) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const updateUser = async (userId: string, data: any) => {
  const user = await User.findByIdAndUpdate(userId, data, { new: true }).select(
    "-password"
  );
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const deleteUser = async (userId: string) => {
  await User.findByIdAndDelete(userId);
};
