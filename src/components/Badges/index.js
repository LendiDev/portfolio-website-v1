import badgesData from "../../data/badges-data";
import Badge from "../Badge";

import "./Badges.css";

const Badges = ({ type = "skills", customBadges, isSmall }) => {
  const createBadges = (badgesList) => {
    return badgesList.map((badge, index) => {
      return <Badge key={`${badge.title}${index}`} {...badge} isSmall={isSmall}/>;
    });
  };

  return (
    <>
      {!customBadges
        ? type === "skills" && createBadges(Object.values(badgesData))
        : createBadges(customBadges)}
    </>
  );
};

export default Badges;
