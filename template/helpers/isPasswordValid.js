const Validator = require("validator");

const isPasswordValid = (password) => {
  if (Validator.isEmpty(password)) {
    throw Error("password is empty");
  }
  if (!Validator.isStrongPassword(password)) {
    throw Error("your password isn't strong");
  }
};

module.exports = isPasswordValid;
