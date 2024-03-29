import { config } from "../../constants/config";
import MySkills from "../MySkills";
import PortfolioList from "../PortfolioList";
import "./Main.css";

const Main = () => {
  return (
    <main className="body-container">
      <div className="Main-body">
        <section className="section-round-bg">
          <div className="about-me">
            <article>
              <h2>Hi 👋</h2>
              <h2>I'm Nikita Lendiak,</h2>
              <h2>
                <span className="text-accent">Software Developer</span>.
              </h2>
              <div className="about-me__content">
                <p>
                  With an unwavering passion for programming, I began as a
                  self-taught coder and transitioned from the hospitality
                  industry into the exciting realm of software engineering. My
                  journey started with Java, Swift and React Native, leading me
                  to{" "}
                  <a
                    href="https://northcoders.com/our-courses/coding-bootcamp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Northcoders Bootcamp
                  </a>{" "}
                  to refine my skills and fill any gaps in my knowledge before
                  diving headfirst into the professional coding world.
                </p>
                <p>
                  I bring to the table a unique blend of creativity,
                  adaptability, and a keen eye for detail. As an enthusiastic
                  team player, I'm eager to join a team where we can collaborate
                  to develop innovative solutions that leave a lasting impact on
                  the world of technology.
                </p>
              </div>
            </article>
          </div>

          <div className="download-cv">
            <a
              className="btn"
              href={config.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>
        <section>
          <h2>My Skills</h2>
          <MySkills />
        </section>
        <section>
          <h2>Featured Projects</h2>
          <PortfolioList />
        </section>
      </div>
    </main>
  );
};

export default Main;
