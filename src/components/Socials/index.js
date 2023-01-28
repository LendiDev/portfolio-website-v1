import RoundButton from "../RoundButton";
import "./Socials.css";

const Socials = (props) => {
  const buttons = [
    {
      iconName: "fa-brands fa-facebook",
      iconSize: "1.6rem",
      iconColor: "#3B6B98",
      backgroundColor: "#111429",
      link: "https://facebook.com",
    },
    {
      iconName: "fa-brands fa-linkedin",
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
      iconName: "fa-brands fa-instagram",
      iconSize: "1.6rem",
      iconColor: "#DC2A7B",
      backgroundColor: "#2B0E25",
      link: "https://instagram.com",
    },
    {
      iconName: "fa-brands fa-github",
      iconSize: "1.45rem",
      iconColor: "#F5F5F5",
      backgroundColor: "#171515",
      link: "https://github.com",
    },
  ];

  return (
    <div className="socials">
      <h2>Social Media</h2>
      <ul className="socials-list">
        {buttons.map((button, index) => (
          <li key={"social-item" + index}>
            <RoundButton
              size={button.size || "3rem"}
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
