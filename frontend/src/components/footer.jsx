import React, { Component } from "react";
import "normalize.css";
import "../App.css";
import gitHub from "../img/GitHub.png";
import repl from "../img/repl.svg";
import codepen_logo from "../img/codepen.png";


class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-item1">Web Developer</div>
          <a
            rel="noopener noreferrer"
            href="https://repl.it/@CedricClark"
            target="_blank"
          >
            <div className="footer-item2">
              <img className="footer-img" src={repl} alt="Repl.it" />
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://codepen.io/cpclark360"
            target="_blank"
          >
            <div className="footer-item3">
              <img className="footer-img" src={codepen_logo} alt="CodePen" />
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/cpclark360"
            target="_blank"
          >
            <div className="footer-item4">
              <img className="footer-img" src={gitHub} alt="GitHub" />
            </div>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
