import "./styles/App.css";
import Footer from "./components/Footer.js";
import Topnav from "./components/topnav/Topnav";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <main className="container">
        <Topnav navOpen={navOpen} setNavOpen={setNavOpen} />
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
