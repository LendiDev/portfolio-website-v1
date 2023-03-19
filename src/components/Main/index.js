import { Link } from "react-scroll";
import Badges from "../Badges";
import PortfolioList from "../PortfolioList";
import "./Main.css";

const Main = () => {
  return (
    <main className="body-container">
      <div className="Main-body">
        <section className="section-round-bg">
          <div className="about-me">
            <article>
              <h3>
                Hi 👋
                <br /> I'm Nikita Lendiak, <br />
                <span className="text-accent">Junior Full Stack Developer</span>
                .
              </h3>
              <p>
                I fell in love with programming while working in the hospitality
                industry. During that time, I spent my spare time creating
                mobile applications using Java and Swift, eventually diving into
                React Native to write code compatible for both Android and iOS
                devices.
              </p>
              <p>
                That enthusiasm inspired me to take the leap and transform my
                hobby into a thriving career, filled with exploration, learning,
                and endless possibilities. Realizing my true calling, I decided
                to change my career this year and joined{" "}
                <a
                  href="https://northcoders.com/our-courses/coding-bootcamp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Northcoders Skills Bootcamp
                </a>{" "}
                to refine my skills and fill any gaps in my knowledge before
                diving headfirst into the professional coding world.
              </p>
              <p>
                With a competitive spirit and a strong drive to excel, I'm eager
                to join a team where we can collaborate to develop innovative
                solutions that leave a lasting impact on the world of
                technology.{" "}
                <Link to="contact-me" spy={true} smooth={true} offset={-4 * 16}>
                  Join me
                </Link>{" "}
                on this amazing journey as we share our love for software
                development and push the boundaries of what's possible, one
                inspired line of code at a time.
              </p>
            </article>
            <img
              className="profile-image"
              src="/assets/images/profile.png"
              alt="Nikita's profile"
            ></img>
          </div>

          <div className="download-cv">
            <a className="btn" href="#top">
              Download CV
            </a>
          </div>
        </section>

        <section>
          <h2>My Skills</h2>
          <Badges />
        </section>
        <section>
          <h2>Education</h2>
          <p>List of...</p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <PortfolioList />
        </section>
      </div>
    </main>
  );
};

export default Main;
