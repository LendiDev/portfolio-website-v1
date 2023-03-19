const { default: axios } = require("axios");
const CustomError = require("./custom-error.model");

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
        return Promise.reject(new CustomError(403, "Couldn't validate human"));
      }
    })
    .catch(() => {
      return Promise.reject(new CustomError(400, "Couldn't validate human"));
    });
};
