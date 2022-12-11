import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";
import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main__hero">
          <picture>
            <source srcSet={heroDesktop} media="(min-width: 768px)" />
            <img
              src={heroMobile}
              alt="Guy with laptop and art pattern around him"
              className="main__hero--img"
            />
          </picture>
        </div>
        <div className="main__content">
          <h1 className="main__content--headline">Make remote work</h1>
          <p className="main__content--text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="main__content--cta">
            <p className="main__content--cta-text">Learn more</p>
          </div>
          <div className="main__content--clients">
            <div className="main__content--clients-client">
              <img
                src={clientAudiophile}
                alt="Audiophile icon"
                className="main__content--clients-client-img"
              />
            </div>
            <div className="main__content--clients-client">
              <img
                src={clientDatabiz}
                alt="Databiz icon"
                className="main__content--clients-client-img"
              />
            </div>
            <div className="main__content--clients-client">
              <img
                src={clientMaker}
                alt="Maker icon"
                className="main__content--clients-client-img"
              />
            </div>
            <div className="main__content--clients-client">
              <img
                src={clientMeet}
                alt="Meet icon"
                className="main__content--clients-client-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
