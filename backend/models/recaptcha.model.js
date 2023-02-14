const ResponseError = require("./response-error.model");

class ReCaptcha {
  constructor(token) {
    this.token = token;
  }
  validateHuman = async () => {
    const secretKey = process.env.RECAPTCHA_SERVER_KEY;

    return fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${this.token}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new ResponseError(
            503,
            "something went wrong - cannot verify who you are"
          );
        }
      })
      .then((data) => {
        if (data.success && data.success === true && data.hostname) {
          return true;
        } else if (!data.success && data["error-codes"]) {
          throw new ResponseError(
            503,
            "something went wrong - cannot verify who you are"
          );
        }
        throw new ResponseError(403, "you are robot");
      }).catch((error) => {
        throw new ResponseError(500, "Something went wrong... Please try again later");
      });
  };
}

module.exports = ReCaptcha;
