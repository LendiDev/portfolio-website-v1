class ReCaptcha {
  constructor(token) {
    this.token = token;
  }
  validateHuman = async () => {
    const secretKey = process.env.RECAPTCHA_SERVER_KEY;

    let response;
    try {
      response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${secretKey}&response=${this.token}`,
        }
      );
    } catch (error) {
      return false;
    }

    if (response.ok) {
      const { success } = await response.json();
      return success;
    }
  };
}

module.exports = ReCaptcha;