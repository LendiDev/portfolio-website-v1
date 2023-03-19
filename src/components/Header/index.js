import "./Header.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import useRemToPixels from "../../hooks/useRemToPixels";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [showHeaderBackground, setShowHeaderBackground] = useState("");

  const { width } = useWindowDimensions();
  const scrollToContactMeOffsetRem = width < 768 ? 4 : 6;
  const headerHeight = useRemToPixels(4);

  const handleScroll = useCallback(() => {
    const topOffset = window.pageYOffset;
    if (topOffset > headerHeight) {
      if (showHeaderBackground !== "show-background") {
        setShowHeaderBackground("show-background");
      }
    } else {
      if (showHeaderBackground === "show-background") {
        setShowHeaderBackground("hide-background");
      }
    }
  }, [headerHeight, showHeaderBackground]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const logoClickHandler = () => {
    useNavigate.navigate("/");
  };

  return (
    <header className={showHeaderBackground}>
      <div id="header-inner-container">
        <div className="header-logo">
          <Link
            to="/"
            className="logo-link"
            target="_self"
            onClick={logoClickHandler}
            href="/"
          >
            <h1>
              Lendi<span className="text-accent">.</span>Dev
            </h1>
          </Link>
        </div>

        <div className="nav-actions">
          <div className="header-download-cv">
            <a className="regular-link" href="#top" style={{ color: "white" }}>
              Resume
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
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
