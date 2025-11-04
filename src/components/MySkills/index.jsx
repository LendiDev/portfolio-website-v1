import badgesData from "../../data/badges-data";
import Badges from "../Badges";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div className="my-skills">
      <div className="my-skills-container">
        <h3>Languages</h3>
        <Badges
          type="skills"
          customBadges={["javascript"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h3>Front-End</h3>
        <Badges
          type="skills"
          customBadges={["htmlCss", "solidjs", "react", "reactNative", "flutter"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h3>Back-End</h3>
        <Badges
          type="skills"
          customBadges={["golang", "nodejs", "express", "mongodb", "psql", "firebase"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h3>Other</h3>
        <Badges
          type="skills"
          customBadges={["github", "tdd", "supertest", "ejs", "s3"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h3>Basic Knowledge</h3>
        <Badges
          type="skills"
          customBadges={["python", "java", "android", "swift", "dart"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
    </div>
  );
};

export default MySkills;
