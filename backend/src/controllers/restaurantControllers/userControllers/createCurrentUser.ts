import { Request, Response } from "express";
import createUserService from "../../../services/createUserService";

const createCurrentUser = async (req: Request, res: Response) => {
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

export default createCurrentUser;
