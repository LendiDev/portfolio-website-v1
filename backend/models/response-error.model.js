class ResponseError extends Error {
  constructor(statusCode, message, success = false) {
    super(message);
    this.statusCode = statusCode;
    this.success = success;
  }

  clientError = () => {
    return { success: this.success, errorMessage: this.message };
  };
}

module.exports = ResponseError;
