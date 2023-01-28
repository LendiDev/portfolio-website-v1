import "./Header.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"
import useRemToPixels from "../../hooks/useRemToPixels";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();
  const scrollToContactMeOffsetRem = width < 768 ? 4 : 6;

  const logoClickHandler = () => {
   useNavigate.navigate('/');
  }

  return (
    <header>
      <div id="header-inner-container">
        <div className="header-logo">
          <Link className="logo-link" target="_self" onClick={logoClickHandler} href="/">
            <h1>
              Lendi<span className="text-accent">.</span>Dev
            </h1>
          </Link>
        </div>

        <div className="nav-actions">
          <div className="header-download-cv">
            <a className="regular-link" href="#top" style={{ color: "white" }}>
              Download CV
            </a>
            <div className="horizontal-line" />
          </div>

          <Link
            className="btn"
            activeClass="active"
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-1 * scrollToContactMeOffsetRem * useRemToPixels()}
            duration={600}
          >
            Hire me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
