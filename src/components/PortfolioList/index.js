import { useState } from "react";
import ProjectInfo from "../ProjectInfo";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioList.css";

const portfolioListData = [
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "Board Games RESTful API",
    header: "Board Games RESTful API",
    description: "This is basic online shop",
    badges: ["nodejs", "express", "psql"],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        Live Demo
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i
          className="fa-brands fa-github btn-icon"
          style={{ color: "black" }}
        ></i>
        View Source
      </button>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "Board games portfolio project preview",
    header: "NC BoardGames RESTful API",
    description:
      "API built for NC BoardGames Front-End that designed to serve reviews, comments, users, categories related to board games and more.",
    badges: ["react", "javascript"],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        More details
        <i
          className="fa-solid fa-angle-right btn-icon"
          style={{ color: "black" }}
        ></i>
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i
          className="fa-brands fa-github btn-icon"
          style={{ color: "black" }}
        ></i>
        View Source
      </button>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "Online shop preview",
    header: "Online Shop",
    description: "This is basic online shop",
    badges: ["nodejs", "mongodb"],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        Live Demo
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i
          className="fa-brands fa-github btn-icon"
          style={{ color: "black" }}
        ></i>
        View Source
      </button>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "Online shop preview",
    header: "Online Shop",
    description: "This is basic online shop",
    badges: ["nodejs", "mongodb"],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        Live Demo
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i
          className="fa-brands fa-github btn-icon"
          style={{ color: "black" }}
        ></i>
        View Source
      </button>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "Online shop preview",
    header: "Online Shop",
    description: "This is basic online shop",
    badges: ["nodejs", "mongodb"],
    liveDemoButton: (
      <button href="" className="btn btn-regular-font">
        Live Demo
      </button>
    ),
    gitHubButton: (
      <button className="btn btn-round btn-with-icon btn-regular-font">
        <i
          className="fa-brands fa-github btn-icon"
          style={{ color: "black" }}
        ></i>
        View Source
      </button>
    ),
  },
];

const PortfolioList = () => {
  const [modalData, setModalData] = useState(null);

  const createPortfolioList = () => {
    return portfolioListData.map((portfolioItem, index) => {
      return (
        <PortfolioItem
          setModalData={setModalData}
          key={`${portfolioItem.header}${index}`}
          portfolioItem={portfolioItem}
        />
      );
    });
  };

  return (
    <>
      {modalData && (
        <ProjectInfo projectData={modalData} setModalData={setModalData} />
      )}
      <ul className="portfolio-list">{createPortfolioList()}</ul>
    </>
  );
};

export default PortfolioList;
