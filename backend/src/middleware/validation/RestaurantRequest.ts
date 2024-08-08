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
    .optional()
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

export const validateRestaurantUpdate = [
  body("name").optional().isString().withMessage("Name must be a string"),
  body("address").optional().isString().withMessage("Address must be a string"),
  body("city").optional().isString().withMessage("City must be a string"),
  body("country").optional().isString().withMessage("Country must be a string"),
  body("postalCode")
    .optional()
    .isString()
    .withMessage("Postal code must be a string"),
  body("contactNumber")
    .optional()
    .isNumeric()
    .withMessage("Contact number must be a number"),
  body("cuisineType")
    .optional()
    .isArray()
    .withMessage("Cuisine type must be an array of strings"),
  body("isOpen").optional().isBoolean().withMessage("IsOpen must be a boolean"),
  body("isVeg").optional().isBoolean().withMessage("IsVeg must be a boolean"),
  body("isNonVeg")
    .optional()
    .isBoolean()
    .withMessage("IsNonVeg must be a boolean"),
  body("openingTime")
    .optional()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Opening time must be in HH:mm format"),
  body("closingTime")
    .optional()
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
    .withMessage("Closing time must be in HH:mm format"),
];
