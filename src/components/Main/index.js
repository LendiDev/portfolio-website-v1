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
                <span className="text-accent">Full Stack Developer</span>.
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
          <div className="badge">
            <p>
              <i
                class="fa-brands fa-square-js"
                style={{ color: "#F7DF1E" }}
              ></i>{" "}
              JavaScript
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-html5" style={{ color: "#f06529" }}></i>
              <i
                class="fa-brands fa-css3-alt"
                style={{ color: "#298EF1" }}
              ></i>{" "}
              HTML/CSS
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-react" style={{ color: "#5ED4F3" }}></i>{" "}
              React
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-node-js" style={{ color: "#F7DF1E" }}></i>{" "}
              NodeJS
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-react" style={{ color: "#5ED4F3" }}></i>{" "}
              React Native
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-android" style={{ color: "#3DDC84" }}></i>{" "}
              Android
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-swift" style={{ color: "#E94E37" }}></i>{" "}
              Swift
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-python" style={{ color: "#F7CA3F" }}></i>{" "}
              Python
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-brands fa-java" style={{ color: "white" }}></i> Java
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-solid fa-database" style={{ color: "#4DB33D" }}></i>{" "}
              MongoDB
            </p>
          </div>
          <div className="badge">
            <p>
              <i class="fa-solid fa-database" style={{ color: "#008bb9" }}></i>{" "}
              PostgresDB
            </p>
          </div>
        </section>
        <section>
          <h2>Education</h2>
          <p>List of...</p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <ul className="portfolio-list">
            <li className="portfolio-item">
              <div className="image-wrapper">
                <img
                  src="https://i.postimg.cc/3RDDYGtm/image-1.png"
                  alt="weather app"
                ></img>
              </div>

              <div className="portfolio-details">
                <div className="project-details">
                  <h3>Online Shop</h3>
                  <p className="app-info">
                    This is basic online shop based on NodeJS
                  </p>
                </div>

                <div class="bottom-flex">
                  <div className="badge">
                    <i
                      class="fa-brands fa-square-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    JavaScript
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-html5"
                      style={{ color: "#f06529" }}
                    ></i>
                    <i
                      class="fa-brands fa-css3-alt"
                      style={{ color: "#298EF1" }}
                    ></i>{" "}
                    HTML/CSS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-node-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    NodeJS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-solid fa-database"
                      style={{ color: "#4DB33D" }}
                    ></i>{" "}
                    MongoDB
                  </div>

                  <div className="portfolio-actions">
                    <button className="btn btn-regular-font">Live Demo</button>
                    <button className="btn btn-round btn-with-icon btn-regular-font">
                      <i
                        class="fa-brands fa-github btn-icon"
                        style={{ color: "black" }}
                      ></i>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="portfolio-item">
              <div className="image-wrapper">
                <img
                  src="https://i.postimg.cc/3RDDYGtm/image-1.png"
                  alt="weather app"
                ></img>
              </div>

              <div className="portfolio-details">
                <div className="project-details">
                  <h3>Online Shop</h3>
                  <p className="app-info">
                    This is basic online shop based on NodeJS, MongoDB This is
                    basic online shop based on NodeJS, MongoDB This is basic
                    online shop based on NodeJS, MongoDB
                  </p>
                </div>

                <div class="bottom-flex">
                  <div className="badge">
                    <i
                      class="fa-brands fa-square-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    JavaScript
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-html5"
                      style={{ color: "#f06529" }}
                    ></i>
                    <i
                      class="fa-brands fa-css3-alt"
                      style={{ color: "#298EF1" }}
                    ></i>{" "}
                    HTML/CSS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-node-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    NodeJS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-solid fa-database"
                      style={{ color: "#4DB33D" }}
                    ></i>{" "}
                    MongoDB
                  </div>

                  <div className="portfolio-actions">
                    <button className="btn btn-regular-font">Live Demo</button>
                    <button className="btn btn-round btn-with-icon btn-regular-font">
                      <i
                        class="fa-brands fa-github btn-icon"
                        style={{ color: "black" }}
                      ></i>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="portfolio-item">
              <div className="image-wrapper">
                <img
                  src="https://i.postimg.cc/3RDDYGtm/image-1.png"
                  alt="weather app"
                ></img>
              </div>

              <div className="portfolio-details">
                <div className="project-details">
                  <h3>Online Shop</h3>
                  <p className="app-info">
                    This is basic online shop based on NodeJS
                  </p>
                </div>

                <div class="bottom-flex">
                  <div className="badge">
                    <i
                      class="fa-brands fa-square-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    JavaScript
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-html5"
                      style={{ color: "#f06529" }}
                    ></i>
                    <i
                      class="fa-brands fa-css3-alt"
                      style={{ color: "#298EF1" }}
                    ></i>{" "}
                    HTML/CSS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-brands fa-node-js"
                      style={{ color: "#F7DF1E" }}
                    ></i>{" "}
                    NodeJS
                  </div>
                  <div className="badge">
                    <i
                      class="fa-solid fa-database"
                      style={{ color: "#4DB33D" }}
                    ></i>{" "}
                    MongoDB
                  </div>

                  <div className="portfolio-actions">
                    <button className="btn btn-regular-font">Live Demo</button>
                    <button className="btn btn-round btn-with-icon btn-regular-font">
                      <i
                        class="fa-brands fa-github btn-icon"
                        style={{ color: "black" }}
                      ></i>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Main;
