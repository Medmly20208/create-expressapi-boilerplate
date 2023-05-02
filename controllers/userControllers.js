const User = require("../models/user.model");
const createToken = require("../utils/createToken");
const isEmailValid = require("../helpers/isEmailValid");
const isPasswordValid = require("../helpers/isPasswordValid");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.ValidateSignUpData = (req, res, next) => {
  try {
    isEmailValid(req.body.email);

    if (req.body.password != req.body.confirmPassword) {
      throw Error("the passwords aren't the same");
    }

    isPasswordValid(req.body.password);
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: error.message,
    });
  }

  next();
};

exports.ValidateLogInData = (req, res, next) => {
  try {
    isEmailValid(req.body.email);
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: error.message,
    });
  }

  next();
};

exports.SignUp = (req, res, next) => {
  if (req.body.password != req.body.confirmPassword) {
    return next(new AppError("password aren't the same", 404));
  }

  User.signup(req.body.email, req.body.password, req.body.type)
    .then((user) => {
      const token = createToken(user._id);
      return res.json({
        status: "success",
        token,
        data: {
          email: user.email,
          type: user.type,
          id: user._id,
        },
      });
    })
    .catch((err) => {
      return res.status(401).json({
        status: "failed",
        message: err.message,
      });
    });
};

exports.LogIn = (req, res) => {
  User.login(req.body.email, req.body.password)
    .then(async (user) => {
      const token = createToken(user._id);

      return res.json({
        status: "success",
        token,
        data: {
          email: user.email,
          type: user.type,
          id: user._id,
        },
      });
    })
    .catch((err) => {
      return res.status(401).json({
        status: "failed",
        message: err.message,
      });
    });
};
