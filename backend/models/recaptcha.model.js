const { default: axios } = require("axios");
const ResponseError = require("./response-error.model");

const { RECAPTCHA_SERVER_KEY } = process.env;

if (!RECAPTCHA_SERVER_KEY) {
  throw new Error("process.env.RECAPTCHA_SERVER_KEY is not set!");
}

exports.validateRecaptcha = (token) => {
  return axios
    .post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: RECAPTCHA_SERVER_KEY,
        response: token,
      },
    })
    .then(({ data }) => {
      if (data.success === true) {
        return true;
      } else {
        return Promise.reject(new ResponseError(403, "Couldn't validate that you are human"));
      }
    })
    .catch(() => {
      return Promise.reject(new ResponseError(400, "Something went wrong"));
    });
};
