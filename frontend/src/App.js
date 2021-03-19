import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/pages/Navbar";
import Home from "./home/pages/Home";
import Experience from "./experience/pages/Experience";
import Education from "./education/pages/Education";
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
            <Route exact path="/About" component={About} />
            <Route exact path="/Experience" component={Experience} />
            <Route exact path="/Education" component={Education} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Blog" component={Blog} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
