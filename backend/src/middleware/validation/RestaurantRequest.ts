import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateRestaurantRequest = [
  body("name").notEmpty().withMessage("Restaurant name is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("postalCode").notEmpty().withMessage("Postal code is required"),
  body("contactNumber").notEmpty().withMessage("Contact number is required"),
  body("cuisineType")
    .isArray()
    .withMessage("Cuisine type must be an array")
    .not()
    .isEmpty()
    .withMessage("Cuisine type array cannot be empty"),
  body("cuisineType.*")
    .isString()
    .withMessage("Each cuisine type must be a string"),
  body("isOpen").isBoolean().withMessage("IsOpen must be a boolean"),
  body("isVeg").isBoolean().withMessage("IsVeg must be a boolean"),
  body("isNonVeg").isBoolean().withMessage("IsNonVeg must be a boolean"),
  body("openingTime").notEmpty().withMessage("Opening time is required"),
  body("closingTime").notEmpty().withMessage("Closing time is required"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*")
    .isMongoId()
    .withMessage("Each menu item must be a valid MongoDB ObjectId"),
  handleValidationErrors,
];
