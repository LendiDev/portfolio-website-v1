import badgesData from "../../../data/badges-data";
import Badges from "../../Badges";
import "./PortfolioItem.css";
const PortfolioItem = ({
  imageSrc,
  imageAlt,
  header,
  description,
  badges,
  liveDemoButton,
  gitHubButton,
}) => {
  const customBadges = badges.map((badgeName) => badgesData[badgeName]);

  return (
    <li className="portfolio-item">
      <div className="image-wrapper">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="portfolio-details">
        <div className="project-details">
          <h3>{header}</h3>
          <p className="app-info">{description}</p>
        </div>
        <div className="bottom-flex">
          <Badges customBadges={customBadges} type="stack" isSmall/>
          <div className="portfolio-actions">
            {liveDemoButton}
            {gitHubButton}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
