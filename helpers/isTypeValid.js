const Validator = require("validator");

const isTypeValid = (type) => {
  if (Validator.isEmpty(type)) {
    throw Error("Type is empty");
  }
};

module.exports = isTypeValid;
