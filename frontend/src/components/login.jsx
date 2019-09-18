import React, { Component } from "react";
import "../Login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <main>
        <div clasclassNames="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                <a href="#"></a>
              </p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                <a href="#"></a>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
