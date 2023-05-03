const AppError = require("../utils/AppError");

const handleCastError = (err) => {
  const message = `Invalid ${err.path}:${err.value}`;
  return new AppError(message, 404);
};

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    stack: err.stack,
    message: err.message,
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  res.status(err.statusCode).json({
    status: "error",
    message: "something went very wrong",
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = !err.statusCode ? 500 : err.statusCode;
  err.status = !err.status ? "error" : err.status;

  sendProdError(err, res);
};
