import badgesData from "../../data/badges-data";
import Badge from "../Badge";

import "./Badges.css";

const Badges = ({ type = "skills", customBadges }) => {
  const createBadges = (badgesList) => {
    return badgesList.map((badge) => {
      return <Badge {...badge} />;
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
