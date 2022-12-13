import "./styles/App.css";
import Footer from "./components/Footer.js";
import Topnav from "./components/topnav/Topnav";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [featuresClicked, setFeaturesClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);

  function closeMenus() {
    featuresClicked && setFeaturesClicked(false);
    companyClicked && setCompanyClicked(false);
  }

  return (
    <>
      <main className="container" onClick={closeMenus}>
        <Topnav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          featuresClicked={featuresClicked}
          setFeaturesClicked={setFeaturesClicked}
          companyClicked={companyClicked}
          setCompanyClicked={setCompanyClicked}
        />
        <Main />
      </main>
      <Footer />
      <div
        className={`overlay ${!navOpen && "hide"}`}
        onClick={() => navOpen && setNavOpen((prev) => !prev)}
      ></div>
    </>
  );
}

export default App;
