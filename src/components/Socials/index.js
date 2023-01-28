import RoundButton from "../RoundButton";
import "./Socials.css";

const Socials = (props) => {
  const buttons = [
    {
      iconName: "fa-brands fa-linkedin-in",
      iconSize: "1.35rem",
      iconColor: "#0e76a8",
      backgroundColor: "#151836",
      link: "https://linkedin.com",
    },
    {
      iconName: "fa-brands fa-twitter",
      iconSize: "1.35rem",
      iconColor: "#1FA1F2",
      backgroundColor: "#0E2038",
      link: "https://twitter.com",
    },
    {
      iconName: "fa-brands fa-facebook",
      iconSize: "1.6rem",
      iconColor: "#3B6B98",
      backgroundColor: "#111429",
      link: "https://facebook.com",
    },
    {
      iconName: "fa-brands fa-github",
      iconSize: "1.45rem",
      iconColor: "#171515",
      backgroundColor: "#F5F5F5",
      link: "https://github.com",
    },
  ];

  return (
    <div className="socials">
      <h2>My Socials</h2>
      <ul className="socials-list">
        {buttons.map((button, index) => (
          <li key={"social-item" + index}>
            <RoundButton
              size={button.size || "2.75rem"}
              iconName={button.iconName}
              iconSize={button.iconSize}
              iconColor={button.iconColor}
              backgroundColor={button.backgroundColor}
              link={button.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
