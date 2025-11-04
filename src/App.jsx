import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoadingModal from "./components/LoadingModal";
import { statusCheck } from "./utils/api";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setIsLoaded(true);
      // do a server status check to spin up a back-end server
      statusCheck();
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="App">
      <LoadingModal isLoaded={isLoaded} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
