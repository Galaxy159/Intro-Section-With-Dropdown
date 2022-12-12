import logo from "../../images/logo.svg";
import menuClose from "../../images/icon-close-menu.svg";
import menuOpen from "../../images/icon-menu.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import calendar from "../../images/icon-calendar.svg";
import todo from "../../images/icon-todo.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";
import Feature from "./Feature";
import { useState } from "react";

export default function Topnav({ navOpen, setNavOpen }) {
  const [featuresClicked, setFeaturesClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);

  const features = [
    {
      text: "Todo List",
      icon: todo,
    },
    {
      text: "Calendar",
      icon: calendar,
    },
    {
      text: "Reminders",
      icon: reminders,
    },
    {
      text: "Planning",
      icon: planning,
    },
  ];

  function handleFeaturesClick() {
    setFeaturesClicked((prev) => !prev);
  }

  function handleCompanyClick() {
    setCompanyClicked((prev) => !prev);
  }

  function handleNavClick() {
    setNavOpen((prev) => !prev);
  }

  return (
    <>
      <div className="topnav__container">
        <div className="topnav__logo">
          <img src={logo} alt="Logo" className="topnav__logo--img" />
        </div>
        <nav className="topnav">
          <div className="topnav__icon" onClick={handleNavClick}>
            <img
              src={navOpen ? menuClose : menuOpen}
              alt="Menu icon"
              className="topnav__icon--img"
            />
          </div>
          <div className={`topnav__menu--container ${navOpen && "showNav"}`}>
            <div className="topnav__menu">
              <div className="topnav__menu--features-container">
                <div
                  className="topnav__menu--features topnav__menu--item"
                  onClick={handleFeaturesClick}
                >
                  <p className="topnav__menu--features-text">Features</p>
                  <div className="topnav__menu--features-arrow">
                    <img
                      src={arrowDown}
                      alt="Open\Close arrow"
                      className={`topnav__menu--features-arrow-img ${
                        featuresClicked && "arrow-open"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`topnav__menu--features-menu ${
                    featuresClicked && "show"
                  }`}
                >
                  {features.map((feature, index) => (
                    <Feature
                      key={index}
                      text={feature.text}
                      icon={feature.icon}
                    />
                  ))}
                </div>
              </div>
              <div className="topnav__menu--company-container">
                <div
                  className="topnav__menu--company topnav__menu--item"
                  onClick={handleCompanyClick}
                >
                  <p className="topnav__menu--company-text">Company</p>
                  <div className="topnav__menu--company-arrow">
                    <img
                      src={arrowDown}
                      alt="Open\Close arrow"
                      className={`topnav__menu--company-arrow-img ${
                        companyClicked && "arrow-open"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`topnav__menu--company-menu ${
                    companyClicked && "show"
                  }`}
                >
                  <p className="topnav__menu--company-menu-item">History</p>
                  <p className="topnav__menu--company-menu-item">Our Team</p>
                  <p className="topnav__menu--company-menu-item">Blog</p>
                </div>
              </div>
              <div className="topnav__menu--careers topnav__menu--item">
                <p className="topnav__menu--careers-text">Careers</p>
              </div>
              <div className="topnav__menu--about topnav__menu--item">
                <p className="topnav__menu--about-text">About</p>
              </div>
            </div>
            <div className="topnav__menu--sign ">
              <p className="topnav__menu--sign-login topnav__menu--item">
                Login
              </p>
              <div className="topnav__menu--sign-register topnav__menu--item">
                <p className="topnav__menu--sign-register-text">Register</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
