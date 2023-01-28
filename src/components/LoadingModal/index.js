import './LoadingModal.css'

const LoadingModal = (props) => {
  return (
    <div className="loading-modal">
       <div className="header-logo loading-logo">
          <div>Lendi</div>
          <div><span className="text-accent bounce">.</span></div>
          <div>Dev</div>
        </div>
    </div>
  );
};

export default LoadingModal;
