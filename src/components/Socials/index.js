import RoundButton from "../RoundButton";
import "./Socials.css";

const Socials = () => {
  const buttons = [
    {
      iconName: "fa-brands fa-linkedin",
      iconSize: "1.6rem",
      iconColor: "#0e76a8",
      backgroundColor: "#151836",
      link: "https://linkedin.com",
    },
    {
      iconName: "fa-brands fa-github",
      iconSize: "1.6rem",
      iconColor: "#DDD",
      backgroundColor: "#171515",
      link: "https://github.com",
    },
  ];

  return (
    <div className="socials">
      <h2>Social Networks</h2>
      <ul className="socials-list">
        {buttons.map((button, index) => (
          <li key={"social-item" + index}>
            <RoundButton {...button} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
