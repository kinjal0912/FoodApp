import { Request, Response } from "express";
import User from "../../models/user";

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country, role } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name ?? user.name;
    user.addressLine1 = addressLine1 ?? user.addressLine1;
    user.city = city ?? user.city;
    user.country = country ?? user.country;
    user.role = role ?? user.role;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default updateCurrentUser;
