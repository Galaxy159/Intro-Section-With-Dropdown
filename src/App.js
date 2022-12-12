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
        <Main navOpen={navOpen} setNavOpen={setNavOpen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
