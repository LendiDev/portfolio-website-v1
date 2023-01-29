import PortfolioItem from "./PortfolioItem";
import "./PortfolioList.css";

const portfolioListData = [
  {
    imageSrc: "https://i.postimg.cc/3RDDYGtm/image-1.png",
    imageAlt: "Online shop preview",
    header: "Online Shop",
    description: "This is basic online shop",
    badges: [
      {
        iconClassName: "fa-brands fa-node-js",
        iconColor: "#F7DF1E",
        title: "NodeJS",
      },
      {
        iconClassName: "fa-solid fa-database",
        iconColor: "#4DB33D",
        title: "MongoDB",
      },
    ],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        Live Demo
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i class="fa-brands fa-github btn-icon" style={{ color: "black" }}></i>
        GitHub
      </button>
    ),
  },
];

const PortfolioList = () => {
  const createPortfolioList = () => {
    return portfolioListData.map((portfolioItem) => {
      return <PortfolioItem {...portfolioItem} />;
    });
  };

  return (
    <ul className="portfolio-list">
      {createPortfolioList()}
    </ul>
  );
};

export default PortfolioList;
