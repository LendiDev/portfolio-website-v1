import { useState } from "react";
import { portfolioData } from "../../data/projects";
import ProjectInfo from "../ProjectInfo";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioList.css";

const PortfolioList = () => {
  const [modalData, setModalData] = useState(null);

  const createPortfolioList = () => {
    return portfolioData.map((portfolioItem, index) => {
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
