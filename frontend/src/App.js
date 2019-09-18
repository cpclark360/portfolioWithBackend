import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import NavBar from "./components/navBar";
import Login from "./components/login";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
