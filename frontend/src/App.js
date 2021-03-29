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
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Resume/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
