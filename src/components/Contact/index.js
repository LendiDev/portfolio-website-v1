import { useState, useRef } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import hostname from "../../constants/dev";
import contactFormSchema from "../../utils/contact-form-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormInputs = {
  name: {
    type: "input",
    placeholder: "Enter your name",
  },
  "e-mail": {
    type: "input",
    placeholder: "Enter your E-Mail address",
  },
  message: {
    type: "textarea",
    placeholder: "Enter your message",
  },
};

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [initialError, setInitialError] = useState();
  const reCaptchaRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setInitialError(undefined);
    const recaptchaToken = await reCaptchaRef.current.executeAsync();
    const contactFormData = {
      ...data,
      recaptchaToken,
    };

    fetch(hostname + "/form/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...contactFormData,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.error === false) {
          setIsEmailSent(true);
        } else {
          setInitialError(jsonResponse.message);
        }
      })
      .catch((error) => {
        setInitialError('Something went wrong... Please try again later.');
        reCaptchaRef.current.reset();
      });
  };

  return (
    <div id="contact-me">
      <div id="contact-me-inner">
        <h2>Contact me</h2>
        {!isEmailSent ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {Object.entries(contactFormInputs).map(([name, value], index) => {
              return (
                <div key={name + index}>
                  <p>
                    <label htmlFor={name}>{name}</label>
                    {value.type === "textarea" ? (
                      <textarea
                        placeholder={value.placeholder}
                        className={`${errors[name] ? "invalid" : ""}`}
                        {...register(name)}
                      />
                    ) : (
                      <input
                        type={value.type}
                        step="any"
                        placeholder={value.placeholder}
                        className={`${errors[name] ? "invalid" : ""}`}
                        {...register(name)}
                      />
                    )}
                    {errors[name] && (
                      <span className="input-error-message invalid">
                        {errors[name]?.message}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}

            <ReCAPTCHA
              className="g-recaptcha"
              sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}
              size="invisible"
              theme="dark"
              ref={reCaptchaRef}
            />

            {initialError && (
              <p className="initial-error-message">
                {initialError}
              </p>
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
