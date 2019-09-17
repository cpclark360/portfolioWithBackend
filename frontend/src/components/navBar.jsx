import React, { Component } from "react";

import "../App.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler ml-auto  border border-dark "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-center font-weight-bold" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-center font-weight-bold"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-center font-weight-bold "
                href="/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-center font-weight-bold"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
