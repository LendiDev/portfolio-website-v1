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
        <div class="bottom-flex">
          <Badges customBadges={badges} type="stack"/>
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

