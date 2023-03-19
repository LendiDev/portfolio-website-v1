const { validateRecaptcha } = require("../models/recaptcha.model");

exports.humanCheck = (req, res, next) => {
  const { recaptchaToken } = req.body;

  validateRecaptcha(recaptchaToken)
    .then(() => {
      next();
    })
    .catch((error) => {
      next(error);
    });
};
