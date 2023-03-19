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
                Hello 👋
                <br /> I'm Nikita Lendiak, <br />
                <span className="text-accent">Junior Full Stack Developer</span>.
              </h3>
              <p>
                Over 5 years of experience in creating and maintaining websites
                for a variety of clients. I specialize in using modern web
                technologies such as HTML, CSS, JavaScript and PHP to create
                responsive and user-friendly websites.
              </p>
              <p>
                I am always looking for new challenges and opportunities to
                expand my skills. Please take a look at my portfolio for
                examples of my work and feel free to contact me for more
                information or to discuss a project.
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
