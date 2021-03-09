import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Experience" component={Experience} />
            <Route exact path="/Education" component={Education} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Blog" component={Blog} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;