import { body } from "express-validator";

export const validateMenuItem = [
  body("name").isString().withMessage("Name must be a string"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("isVeg").isBoolean().withMessage("isVeg must be a boolean"),
  body("isJainFriendly")
    .isBoolean()
    .withMessage("isJainFriendly must be a boolean"),
  body("ingredients")
    .isArray()
    .withMessage("Ingredients must be an array of strings"),
  body("description").isString().withMessage("Description must be string"),
  body("isNonVeg").isBoolean().withMessage("isNonVeg must be a boolean"),
];

export const validateMenuItemUpdate = [
  body("name").optional().isString().withMessage("Name must be a string"),
  body("price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("isVeg").optional().isBoolean().withMessage("isVeg must be a boolean"),
  body("isJainFriendly")
    .optional()
    .isBoolean()
    .withMessage("isJainFriendly must be a boolean"),
  body("ingredients")
    .optional()
    .isArray()
    .withMessage("Ingredients must be an array of strings"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be string"),
  body("isNonVeg")
    .optional()
    .isBoolean()
    .withMessage("isNonVeg must be a boolean"),
];
