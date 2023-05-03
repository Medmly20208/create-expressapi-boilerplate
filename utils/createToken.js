const jwt = require("jsonwebtoken");

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET_JWT, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

module.exports = createToken;
