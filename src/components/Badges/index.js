import Badge from "../Badge";
import "./Badges.css";

const listOfSkillBadges = [
  {
    iconClassName: "fa-brands fa-square-js",
    iconColor: "#F7DF1E",
    title: "Javascript",
  },
  {
    iconClassName: "fa-brands fa-html5",
    iconColor: "#f06529",
    iconClassName2: "fa-brands fa-css3-alt",
    iconColor2: "#298EF1",
    title: "HTML/CSS",
  },
  {
    iconClassName: "fa-brands fa-react",
    iconColor: "#5ED4F3",
    title: "React",
  },
  {
    iconClassName: "fa-brands fa-node-js",
    iconColor: "#F7DF1E",
    title: "NodeJS",
  },
  {
    iconClassName: "fa-brands fa-react",
    iconColor: "#5ED4F3",
    title: "React Native",
  },
  {
    iconClassName: "fa-brands fa-android",
    iconColor: "#3DDC84",
    title: "Android",
  },
  {
    iconClassName: "fa-brands fa-swift",
    iconColor: "#E94E37",
    title: "Swift",
  },
  {
    iconClassName: "fa-brands fa-python",
    iconColor: "#F7CA3F",
    title: "Python",
  },
  {
    iconClassName: "fa-brands fa-java",
    iconColor: "#fff",
    title: "Java",
  },
  {
    iconClassName: "fa-solid fa-database",
    iconColor: "#4DB33D",
    title: "MongoDB",
  },
  {
    iconClassName: "fa-solid fa-database",
    iconColor: "#008bb9",
    title: "SQL",
  },
];

const Badges = ({ type = "skills", customBadges }) => {
  const createBadges = (badgesList) => {
    return badgesList.map((badge) => {
      return <Badge {...badge} />;
    });
  };

  return (
    <>
      {!customBadges
        ? type === "skills" && createBadges(listOfSkillBadges)
        : createBadges(customBadges)}
    </>
  );
};

export default Badges;
