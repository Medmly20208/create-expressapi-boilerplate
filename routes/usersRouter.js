const express = require("express");
const userController = require("../controllers/userControllers");

const Router = express.Router();

Router.post(
  "/signup",
  userController.ValidateSignUpData,
  userController.SignUp
);
Router.post("/login", userController.ValidateLogInData, userController.LogIn);

module.exports = Router;
