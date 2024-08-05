import { Request, Response } from "express";
import updateUserserService from "../../../services/updateUserService";

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, city, country, role } = req.body;
    const { userId } = req;
    const { user, updated } = await updateUserserService.updateUserById({
      userId,
      name,
      addressLine1,
      city,
      country,
      role,
    });

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

export default updateCurrentUser;
