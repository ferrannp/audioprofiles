import React, { useEffect, useState } from "react";
import { Footer } from "../js/components/Footer";

const Home = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setPosition((prevPosition) => ++prevPosition % 8),
      2500 // @TODO stop on hover, start faster?
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [];
  for (let i = 0; i < 8; i++) {
    images.push(
      <img
        alt={`Screenshot ${i + 1}`}
        key={i}
        src={"/assets/img/screen_" + (i + 1) + ".png"}
        className={position === i ? "active" : ""}
      />
    );
  }

  const badgeUrl =
    "https://play.google.com/store/apps/details?id=com.fnp.audioprofiles";

  return (
    <div id="container">
      <div className="wrapper">
        {/*<Toolbar toggleSideBar={this.toggleSideBar}/>*/}
        {/*<Toolbar />*/}
        {/*<LeftNav isOpen={this.state.leftNavOpen}/>*/}
        <div className="sub-header large" />
        <div className="content home">
          <div className="screen-container medium-up">
            <div className="phone-overlay">{images}</div>
          </div>
          <div className="content-right">
            <div className="sub-header-right">
              <h1>Audio Profiles</h1>
              <h2>Full control of your calls and notifications on Android</h2>
              <a href={badgeUrl}>
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
                />
              </a>
            </div>
            <div className="comments">
              <p>
                &quot;Worth its price in gold. Very easy to create profiles as
                needed and even easier to switch between them. Must have for
                efficiency minded people. Try it out and convince
                yourself.&quot;
              </p>
              <p className="right">Mario Gambetta</p>
            </div>
            <div className="comments">
              <p>
                &quot;Best application for sound profiles. You can even put tone
                for hidden numbers. Friendly user and you can totally customize
                your sound profiles&quot;
              </p>
              <p className="right">Naomi Nakagawa</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
