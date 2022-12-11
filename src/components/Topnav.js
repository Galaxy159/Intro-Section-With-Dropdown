import logo from "../images/logo.svg";
import menuClose from "../images/icon-close-menu.svg";
import menuOpen from "../images/icon-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";

export default function Topnav({ navOpen, setNavOpen }) {
  return (
    <>
      <div className="topnav__container">
        <div className="topnav__logo">
          <img src={logo} alt="Logo" className="topnav__logo--img" />
        </div>
        <nav className="topnav">
          <div className="topnav__icon">
            <img
              src={navOpen ? menuClose : menuOpen}
              alt="Menu icon"
              className="topnav__icon-img"
            />
          </div>
          <div className="topnav__menu--container">
            <div className="topnav__menu">
              <div className="topnav__menu--features">
                <p className="topnav__menu--features-text">Features</p>
                <div className="topnav__menu--features-arrow">
                  <img
                    src={arrowDown}
                    alt="Open\Close arrow"
                    className="topnav__menu--features-arrow-img"
                  />
                </div>
              </div>
              <div className="topnav__menu--company">
                <p className="topnav__menu--company-text">Company</p>
                <div className="topnav__menu--company-arrow">
                  <img
                    src={arrowUp}
                    alt="Open\Close arrow"
                    className="topnav__menu--company-arrow-img"
                  />
                </div>
              </div>
              <div className="topnav__menu--careers">
                <p className="topnav__menu--careers-text">Careers</p>
              </div>
              <div className="topnav__menu--about">
                <p className="topnav__menu--about-text">About</p>
              </div>
            </div>
            <div className="topnav__menu--sign">
              <p className="topnav__menu--sign-login">Login</p>
              <div className="topnav__menu--sign-register">Register</div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
