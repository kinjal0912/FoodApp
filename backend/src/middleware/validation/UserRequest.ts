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

export const validateCreateUserRequest = [
  body("email")
    .isEmail()
    .withMessage("Email must be valid")
    .notEmpty()
    .withMessage("Email is required"),
  body("contactNo")
    .optional() // Make it optional as it may not always be provided
    .isNumeric()
    .withMessage("Contact number must be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact number must be exactly 10 digits long"),
  body("name").optional().isString().withMessage("Name must be a string"),
  body("addressLine1")
    .optional()
    .isString()
    .withMessage("AddressLine1 must be a string"),
  body("city").optional().isString().withMessage("City must be a string"),
  body("country").optional().isString().withMessage("Country must be a string"),
  body("role")
    .optional()
    .isIn(["admin", "restaurant", "buyer", "delivery"])
    .withMessage(
      "Role must be one of the following: admin, restaurant, buyer, delivery"
    ),
  handleValidationErrors,
];

export const validateUpdateUserRequest = [
  body("name").optional().isString().withMessage("Name must be a string"),
  body("addressLine1")
    .optional()
    .isString()
    .withMessage("AddressLine1 must be a string"),
  body("city").optional().isString().withMessage("City must be a string"),
  body("country").optional().isString().withMessage("Country must be a string"),
  body("email").optional().isEmail().withMessage("Email must be valid"),
  body("contactNo")
    .optional()
    .isNumeric()
    .withMessage("Contact number must be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("Contact number must be exactly 10 digits long"),
  body("role")
    .optional()
    .isIn(["admin", "restaurant", "buyer", "delivery"])
    .withMessage(
      "Role must be one of the following: admin, restaurant, buyer, delivery"
    ),
  handleValidationErrors,
];
