import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Navbar.css";

const Navbar = () => {
  return (
    <Fragment>
    <Container fluid>
    <Row className="navbar">
        <Col><NavLink to="/" className="link title" >Lee Ren Jie</NavLink></Col>
        <Col><NavLink to="/" className="hoverable link" >Home</NavLink></Col>
        <Col><NavLink to="/About" className="hoverable link" >About</NavLink></Col>
        <Col><NavLink to="/Education" className="hoverable link" >Education</NavLink></Col>
        <Col><NavLink to="/Experience" className="hoverable link" >Experience</NavLink></Col>
        <Col><NavLink to="/Projects" className="hoverable link" >Projects</NavLink></Col>
        <Col><NavLink to="/Blog" className="hoverable link" >Blog</NavLink></Col>
      </Row>
      </Container>
    </Fragment>
    )
};

export default Navbar;