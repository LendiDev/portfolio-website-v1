class CustomError extends Error {
  constructor(statusCode, message, success = false) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
  }
}

module.exports = CustomError;
