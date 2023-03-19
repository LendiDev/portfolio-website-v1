import { useState, useRef } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import hostname from "../../constants/dev";
import contactFormSchema from "../../utils/contact-form-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const contactFormInputs = {
  name: {
    type: "input",
    placeholder: "Enter your name",
  },
  email: {
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
  const [isLoading, setIsLoading] = useState(false);
  const [initialError, setInitialError] = useState(null);
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
    setInitialError(null);
    setIsLoading(true);
    const recaptchaToken = await reCaptchaRef.current.executeAsync();
    const contactFormData = {
      ...data,
      recaptchaToken,
    };

    axios
      .post(hostname + "/form/send", contactFormData)
      .then(() => {
        setIsEmailSent(true);
      })
      .catch((error) => {
        setInitialError(error.message);
        reCaptchaRef.current.reset();
      })
      .finally(() => {
        setIsLoading(false);
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
              <p className="initial-error-message">{initialError}</p>
            )}

            <button
              type="submit"
              className="btn btn-regular-font"
              disabled={isLoading}
            >
              <i className="fa-solid fa-paper-plane"></i>{" "}
              {!isLoading ? "Send" : "Sending..."}
            </button>
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
