import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleRecaptchaKeys from "../../constants/google-recaptcha";
import { useRef } from "react";

const Contact = () => {

  const reCaptchaRef = useRef();

  const contactFormSubmitHandler = async (event) => {
    event.preventDefault();

    const reCaptchaToken = await reCaptchaRef.current.executeAsync();
    console.log(reCaptchaToken);
    console.log(event);

    // after submition to the server:
    reCaptchaRef.current.reset();

  }

  return (
    <div id="contact-me">
      <div id="contact-me-inner">
        <h2>Contact me</h2>
        <form onSubmit={contactFormSubmitHandler}>
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </p>
          <p>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your E-Mail address"
            />
          </p>
          <p>
            <label htmlFor="emain">Message</label>
            <textarea rows={10} placeholder="Leave a message for me"></textarea>
          </p>
          <ReCAPTCHA
            sitekey={GoogleRecaptchaKeys.clientKey}
            size="invisible"
            ref={reCaptchaRef}
          />
          <button type="submit" className="btn btn-regular-font">
            <i className="fa-solid fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
