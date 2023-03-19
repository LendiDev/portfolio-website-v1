const validationPatterns = {
  name: /^[a-z\s]{2,}$/i,
  email: /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
  message: /.{10,}/is,
};

const validate = (name, input) => {
  return validationPatterns[name].test(input) && input.length > 0;
};

const validateForm = (data) => {
  return (
    validate("name", data.name) &&
    validate("email", data.email) &&
    validate("message", data.message)
  );
};

module.exports = validateForm;
