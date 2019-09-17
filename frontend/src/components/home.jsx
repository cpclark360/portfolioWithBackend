import React, { Component } from "react";
import linkedin from "../img/linkedin.png";
import devto from "../img/dev-logo.jpg";
import twitter from "../img/twitter.png";

import "normalize.css";
import "../App.css";
import profile from "../img/me.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <main id="main">
        <div className="profile">
          <img className="profile-img" src={profile} alt="profile" />
          <h1 className="profile-name">Cedric Clark</h1>
          <article className="about">
            <p>
              I am a self-taught coder, web development has become one of my
              passions. There is always something new to learn. Overcoming each
              coding obstacle is a pleasure. Seeking ways to improve my skill
              set is a never ending challenge. My wife and son help keep me
              motivated, and pushing forward. While I am not coding I enjoy
              league bowling, movies, gaming and the gym.
            </p>
            {/* <span className="links">
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/cedric-clark-a5a99479/"
                target="_blank"
              >
                <img className="link-img1" src={linkedin} alt="Dev.to" />
              </a>

              <a
                rel="noopener noreferrer"
                href="https://dev.to/cpclark360"
                target="_blank"
              >
                <img className="link-img2" src={devto} alt="Dev.to" />
              </a>

              <a
                rel="noopener noreferrer"
                href="https://twitter.com/CedricC62254142"
                target="_blank"
              >
                <img className="link-img3" src={twitter} alt="Dev.to" />
              </a>
            </span> */}
          </article>
        </div>
      </main>
    );
  }
}

export default Home;
