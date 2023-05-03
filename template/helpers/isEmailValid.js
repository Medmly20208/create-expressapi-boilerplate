const Validator = require("validator");

const isEmailValid = (email) => {
  if (Validator.isEmpty(email)) {
    throw Error("email is empty");
  }
  if (!Validator.isEmail(email)) {
    throw Error("that's not a valid email");
  }
};

module.exports = isEmailValid;
