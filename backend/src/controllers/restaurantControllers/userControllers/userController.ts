import { Request, Response } from "express";
import { createUserService } from "../../../services/userService";

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { userId, role } = req.body;
    const { user, created } = await createUserService.createUser({
      userId,
      role,
    });

    if (!created) {
      return res.status(200).send();
    }

    res.status(201).json(user.toObject());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const { user, found } = await getUserService.getUserById(userId);

    if (!found) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
