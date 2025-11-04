import Socials from "../Socials";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer name="contact-me">
      <div className="contact-me-outer-container">
        <div className="contact-me-container">
          <Socials />
        </div>
      </div>
      <div className="bottom-footer-container">
        <p>
          Lendi<span className="text-accent">.</span>Dev &copy; 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
