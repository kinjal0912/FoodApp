import { Request, Response } from "express";
import * as UserService from "../services/userService";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await UserService.signUp(req.body);
    res.status(201).json(user);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const token = await UserService.signIn(req.body);
    res.status(200).json({ token });
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

export const logout = (req: Request, res: Response) => {
  res.status(200).send("Logged out successfully");
};

export const getUserDetails = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const user = await UserService.getUserDetails(req.user._id);
    res.status(200).json(user);
  } catch (error) {
    const err = error as Error;
    res.status(404).json({ error: err.message });
  }
};

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await UserService.updateUser(req.user._id, req.body);
    res.status(200).json(user);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    await UserService.deleteUser(req.user._id);
    res.status(200).send("User deleted successfully");
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};
