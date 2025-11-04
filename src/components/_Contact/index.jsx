import { useState, useRef } from "react";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import contactFormSchema from "../../utils/contact-form-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postContactMe } from "../../utils/api";

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

    let recaptchaToken;
    try {
      recaptchaToken = await reCaptchaRef.current.executeAsync();
    } catch (error) {
      setInitialError('Something went wrong with verifying ReCaptcha');
    } finally {
      setIsLoading(false);
      reCaptchaRef.current.reset();
    }
    
    const contactFormData = {
      ...data,
      recaptchaToken,
    };

    setIsLoading(true);
    postContactMe(contactFormData)
      .then(() => {
        setIsEmailSent(true);
      })
      .catch((error) => {
        if (error.message === 'Network Error') {
          setInitialError('Something went wrong, please try again later');
        } else {
          setInitialError(error.message);
        }
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
              sitekey={import.meta.env.VITE_RECAPTCHA_CLIENT_KEY || ''}
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
              <i className="fa-solid fa-paper-plane"></i>
              {!isLoading ? "Send" : "Sending..."}
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
            <p>I will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
