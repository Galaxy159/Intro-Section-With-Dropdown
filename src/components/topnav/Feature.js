export default function Feature({ text, icon }) {
  return (
    <>
      <div className="topnav__menu--features-menu-item">
        <div className="topnav__menu--features-menu-item-icon">
          <img
            src={icon}
            alt={text}
            className="topnav__menu--features-menu-item-icon-img"
          />
        </div>
        <p className="topnav__menu--features-menu-item-text">{text}</p>
      </div>
    </>
  );
}
