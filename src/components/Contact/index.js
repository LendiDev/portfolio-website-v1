import { useState } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import validationPatterns from "../../utils/validationPatterns";
import hostname from "../../constants/dev";

const Contact = () => {
  const [isEmailSend, setEmailSend] = useState(false);
  const [internalError, setInternalError] = useState(undefined);
  const reCaptchaRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    await reCaptchaRef.current.executeAsync();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    let response;
    try {
      response = await fetch(hostname + "/form/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      setInternalError("Something went wrong. Try a bit later.");
      await reCaptchaRef.current.reset();
      return;
    }

    let jsonResponse;
    if (response.ok) {
      jsonResponse = await response.text();
    } else {
      setInternalError("Something went wrong. Try a bit later.");
      await reCaptchaRef.current.reset();
      return;
    }

    if (!jsonResponse.error) {
      setEmailSend(true);
    }
    setInternalError(undefined);
  };

  const validate = (event) => {
    const element = event.target ? event.target : event;
    const elementName = element.name;
    const value = element.value.trim();

    let error;
    let pattern;

    if (elementName === "name") {
      pattern = validationPatterns.name;
      error =
        "Name should contain at least 2 characters, only letters and spaces are permitted";
    }

    if (elementName === "email") {
      pattern = validationPatterns.email;
      error = "Enter a valid E-Mail address";
    }

    if (elementName === "message") {
      pattern = validationPatterns.message;
      error = "Message must be at least 20 characters long";
    }

    if (!pattern) {
      return false;
    }

    const errorElement = document.querySelector(`.input-error-${elementName}`);

    if (!errorElement) {
      return false;
    }

    if (pattern.test(value) && value.length > 1) {
      errorElement.textContent = "";
      element.classList.remove("invalid");
      element.classList.add("valid");
      return true;
    } else {
      errorElement.textContent = error;
      element.classList.add("invalid");
      element.classList.remove("valid");
      return false;
    }
  };

  const validateForm = () => {
    var valid = true;

    validate(document.getElementById("name"));
    validate(document.getElementById("email"));
    validate(document.getElementById("message"));

    valid =
      validate(document.getElementById("name")) &&
      validate(document.getElementById("email")) &&
      validate(document.getElementById("message"));

    return valid;
  };

  return (
    <div id="contact-me">
      <div id="contact-me-inner">
        <h2>Contact me</h2>
        {!isEmailSend ? (
          <form onSubmit={handleFormSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                minLength={2}
                onBlur={validate}
              />
              <span className="input-error-name invalid"></span>
            </p>
            <p>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your E-Mail address"
                onBlur={validate}
              />
              <span className="input-error-email invalid"></span>
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={10}
                placeholder="Leave a message"
                onChange={validate}
                minLength={10}
              ></textarea>
              <span className="input-error-message invalid"></span>
            </p>
            <ReCAPTCHA
              className="recaptcha"
              sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}
              size="invisible"
              theme="dark"
              ref={reCaptchaRef}
            />
            {internalError && (
              <p className="internal-error invalid">{internalError}</p>
            )}
            <button type="submit" className="btn btn-regular-font">
              <i className="fa-solid fa-paper-plane"></i> Send
            </button>
            <div className="google-copyright">
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target={"blank"}>
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target={"blank"}>
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </form>
        ) : (
          <div className="email-sent">
            <p>Thank you! Your message has been sent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
