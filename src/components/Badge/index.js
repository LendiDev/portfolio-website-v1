import "./Badge.css";
const Badge = ({
  iconClassName,
  iconColor = "#fff",
  iconClassName2,
  iconColor2 = "#fff",
  title,
}) => {
  return (
    <div className="badge">
      <p>
        {iconClassName && (
          <i className={iconClassName} style={{ color: iconColor }}></i>
        )}
        {iconClassName2 && (
          <i
            className={iconClassName2}
            style={{ color: iconColor2, marginLeft: -7.5 }}
          ></i>
        )}
        {title}
      </p>
    </div>
  );
};

export default Badge;
