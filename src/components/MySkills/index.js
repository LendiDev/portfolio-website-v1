import badgesData from "../../data/badges-data";
import Badges from "../Badges";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div className="my-skills">
      <div className="my-skills-container">
        <h4>Front-End</h4>
        <Badges
          type="skills"
          customBadges={["javascript", "htmlCss", "react", "reactNative"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h4>Back-End</h4>
        <Badges
          type="skills"
          customBadges={["nodejs", "express", "mongodb", "psql"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h4>Other</h4>
        <Badges
          type="skills"
          customBadges={["github", "tdd", "supertest"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
      <div className="my-skills-container">
        <h4>Basic Knowledge</h4>
        <Badges
          type="skills"
          customBadges={["python", "java", "android", "swift"].map(
            (badgeName) => badgesData[badgeName]
          )}
        />
      </div>
    </div>
  );
};

export default MySkills;
