import { useEffect } from "react";
import "./ProjectInfo.css";

const ProjectInfo = ({ setModalData }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setModalData(null);
  };

  return (
    <div className="project-info-modal">
      <div className="project-info-modal-container">
        <div className="project-info-modal-close-button">
          <button onClick={handleClose}>Close</button>
        </div>
        <p>I am modal</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
