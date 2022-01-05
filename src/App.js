import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./shared//components/Navbar/Navbar";
import Home from "./home/pages/Home";
import Experience from "./experience/pages/Experience";
import Projects from "./projects/pages/Projects";
import About from "./about/pages/About";
import Blog from "./blog/pages/Blog";
import Resume from "./shared/components/Resume/Resume";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Resume/>
          <Switch>
            <Route exact path="/Portfolio" component={Home}/>
            <Route exact path="/Portfolio/about" component={About} />
            <Route exact path="/Portfolio/experience" component={Experience} />
            <Route exact path="/Portfolio/projects" component={Projects} />
            <Route exact path="/Portfolio/blog" component={Blog} />
            <Redirect to="/Portfolio" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
