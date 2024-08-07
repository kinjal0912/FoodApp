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
  body("isNonVeg").isBoolean().withMessage("isNonVeg must be a boolean"),
];
