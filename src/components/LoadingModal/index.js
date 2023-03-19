import { useEffect, useRef, useState } from "react";
import "./LoadingModal.css";

const LoadingModal = ({ isLoaded }) => {
  const [hideClassName, setHideModalClassName] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setHideModalClassName("hide-modal");
      }, 250);

      setTimeout(() => {
        ref.current.remove();
      }, 500);
    }
  }, [isLoaded]);

  return (
    <div ref={ref} className={"loading-modal " + hideClassName}>
      <div className="header-logo loading-logo">
        <div>Lendi</div>
        <div>
          <span className="text-accent bounce">.</span>
        </div>
        <div>Dev</div>
      </div>
    </div>
  );
};

export default LoadingModal;
