import badgesData from "../../../data/badges-data";
import Badges from "../../Badges";
import "./PortfolioItem.css";
const PortfolioItem = (props) => {
  const { imageSrc, imageAlt, header, description, badges, buttons, date } =
    props.portfolioItem;

  const customBadges = badges.map((badgeName) => badgesData[badgeName]);

  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);

  return (
    <li className="portfolio-item">
      <div className="image-wrapper">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="portfolio-details">
        <h3>{header}</h3>
        <time dateTime={date.toUTCString()}>{month} {year}</time>
        <p
          className="app-info"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="bottom-flex">
          <Badges customBadges={customBadges} type="stack" isSmall />
          <div className="portfolio-actions">{buttons}</div>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
