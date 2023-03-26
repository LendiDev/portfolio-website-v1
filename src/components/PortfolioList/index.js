import { useState } from "react";
import ProjectInfo from "../ProjectInfo";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioList.css";

const portfolioListData = [
  {
    imageSrc: "/assets/projects/boardgames/0.png",
    imageAlt: "NC BoardGames front-end reviews preview",
    header: "NC BoardGames Front-End",
    description:
      "Delivers an engaging and responsive user interface for a board game reviews. Developed in a week, it interacts seamlessly with the backend NC BoardGames Backend API, allowing users to browse, contribute to a reviews, comment, vote and more.",
    badges: ["javascript", "react", "htmlCss"],
    buttons: (
      <>
        <a
          href="https://nc-bg.netlify.app/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/fe-nc-games/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/boardgames-api/0.png",
    imageAlt: "NC BoardGames API endpoints preview",
    header: "NC BoardGames Backend API",
    description:
      "Built for NC BoardGames Front-End that designed to serve reviews, comments, users, categories related to board games and more. It is a fast, efficient server built in a week as part of Northcoder Bootcamp, powering a user-driven board game reviews platform.",
    badges: ["nodejs", "express", "psql", "tdd", "supertest"],
    buttons: (
      <>
        {/* <a
          href="https://lendidev.gitbook.io/nc-games/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-solid fa-book"
            style={{ color: "black" }}
          ></i>
          Docs
        </a> */}
        <a
          href="https://nc-games.lendi.dev/api"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/backend-nc-games/"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
    ),
  },
  {
    imageSrc: "/assets/projects/meteorites/0.png",
    imageAlt: "Meteorite landings website preview",
    header: "Meteorite Landings 🌍",
    description:
      "My impressive one-day sprint project that visualizes meteorite landings based on NASA's database. Leveraging React, the interactive map (MapBox) provides an engaging and intuitive way to explore meteorite impact locations across the globe.",
    badges: ["javascript", "react", "htmlCss"],
    buttons: (
      <>
        <a
          href="https://meteorite-landings-react.netlify.app"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-eye" style={{ color: "black" }}></i>
          Live Demo
        </a>
        <a
          href="https://github.com/LendiDev/meteorites-map-react-app"
          className="btn btn-regular-font"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github btn-icon"
            style={{ color: "black" }}
          ></i>
          View Source
        </a>
      </>
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
