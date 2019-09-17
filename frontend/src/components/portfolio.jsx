import React, { Component } from "react";
import todo from "../img/todo.png";
import "../App.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <main id="main">
        <div className="container mt-40">
          <h3 className="text-center" />
          <div className="row mt-30">
            <div className="col-md-4 col-sm-6">
              <div className="box16">
                <img src={todo} alt="Project 1" />
                <div className="box-content">
                  <h3 className="title" />
                  <span className="post font-weight-bold">Project 1 todo</span>
                  <ul className="social">
                    <li>
                      <a href="#" alt="github">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li />
                    <li>
                      <a href="#" alt="Live View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box16">
                <img src={todo} alt="Project 3" />
                <div className="box-content">
                  <h3 className="title" />
                  <span className="post font-weight-bold">Project 2 todo</span>
                  <ul className="social">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        aria-label="GitHub"
                        alt="github"
                      >
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li />
                    <li />
                    <li>
                      <a href="#" alt="Live View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="box16">
                <img src={todo} alt="Project 3" />
                <div className="box-content">
                  <h3 className="title" />
                  <span className="post font-weight-bold">Project 3 todo</span>
                  <ul className="social">
                    <li>
                      <a href="#" alt="github">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li />
                    <li />
                    <li>
                      <a href="#" alt="Live View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Portfolio;
