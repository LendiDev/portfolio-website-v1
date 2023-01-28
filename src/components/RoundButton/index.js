import { useState } from "react";
import "./RoundButton.css";

const RoundButton = ({
  size = "3rem",
  iconName = "fa-solid fa-xmark",
  iconColor = "#04041a",
  backgroundColor = "#fff",
  iconSize = "1.75rem",
  link = "#",
  borderRadius = "100px",
}) => {
  const [bgColor, setbgColor] = useState(backgroundColor);

  const btnStyle = {
    backgroundColor: bgColor,
    width: size,
    height: size,
    borderRadius: borderRadius,
  };

  const iconStyle = {
    fontSize: iconSize,
    color: iconColor,
  };

  return (
    <a
      style={btnStyle}
      className="btn-round-socials"
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setbgColor(backgroundColor + "90")}
      onMouseLeave={() => setbgColor(backgroundColor)}
    >
      <i class={iconName} style={iconStyle}></i>
    </a>
  );
};

export default RoundButton;
