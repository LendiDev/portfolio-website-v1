class ResponseError extends Error {
  constructor(statusCode, message, cause, success = false) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ResponseError";
    this.cause = cause;
    this.success = success;
  }

  clientError = () => {
    return { success: this.success, errorMessage: this.message };
  };
}

module.exports = ResponseError;
