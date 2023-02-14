const notFoundErrorMiddleware = (req, res, next) => {
  console.log("redirecting");
  res.redirect("/");
};

const errorHandlerMiddleware = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    status: errStatus,
    message: errMsg,
  });
};

module.exports = { notFoundErrorMiddleware, errorHandlerMiddleware };
