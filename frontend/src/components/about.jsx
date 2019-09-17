import React, { Component } from "react";
// import "normalize.css";
import "../App.css";
import HTML5 from "../img/html5.svg";
import CSS3 from "../img/CSS3.svg";
import JS from "../img/JS.svg";
import NODE from "../img/node.svg";
import react from "../img/react.svg";

class About extends Component {
  state = {};
  render() {
    return (
      <main id="main">
        <div className="about-container">
          <div className="about">
            <fieldset className="about-a">
              <div className="section">Education</div>
              <ul>
                <li>
                  <div className="info">
                    2004 - Graduated Overton High School
                  </div>
                </li>
                <li>
                  <div className="info">
                    2012 - University Of Memphis - Bachelor's Degree -
                    Engineering Technology
                  </div>
                </li>
              </ul>
            </fieldset>
          </div>
          <div className="about">
            <fieldset className="about-c">
              <div className="section">Experience</div>
              <ul>
                <li>
                  <div className="info">
                    AT&T, Wire Technician - 10/2013 to Present
                  </div>
                  <ul className="inner">
                    <li>
                      Installation and repair AT&T telecommunication copper and
                      fiber network.
                    </li>
                    <li>
                      Meet strict demands of efficiency, safely and quality of
                      work.
                    </li>
                    <li>
                      Use of hand tools, communication test sets and measurement
                      equipment.
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="info">
                    Delta Airlines, Ramp Agent - 08/2005 to 10/2013
                  </div>
                  <ul className="inner">
                    <li>Directed aircraft to assigned parking gate.</li>
                    <li>Unloaded and loaded customer baggage and cargo</li>
                    <li>Meet departure deadlines and strict safely rules.</li>
                  </ul>
                </li>
              </ul>
            </fieldset>
          </div>
          <div className="about">
            <fieldset className="about-b">
              <div className="section">
                <p>Skills</p>
              </div>
              <div className="skills">
                <div id="skill" className="skillList-1">
                  <img className="skills" src={HTML5} alt="skill" />
                </div>
                <div id="skill" className="skills">
                  <img className="skills" src={CSS3} alt="skill" />
                </div>
                <div id="skill" className="skills">
                  <img className="skills" src={JS} alt="skill" />
                </div>
                <div id="skill" className="skills">
                  <img className="skills" src={NODE} alt="skill" />
                </div>
                <div id="skill" className="skills">
                  <img className="skills" src={react} alt="skill" />
                </div>
           
              </div>
            </fieldset>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
