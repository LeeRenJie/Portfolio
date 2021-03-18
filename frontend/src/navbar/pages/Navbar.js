import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className={styles.navbar}>
          <Col xs={6}>
            <NavLink to="/" className={`${styles.link} ${styles.title}`}>
              Lee Ren Jie 
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/" className={`${styles.hoverable} ${styles.link}`}>
              Home
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/About" className={`${styles.hoverable} ${styles.link}`}>
              About
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/Education" className={`${styles.hoverable} ${styles.link}`}>
              Education
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/Experience" className={`${styles.hoverable} ${styles.link}`}>
              Experience
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/Projects" className={`${styles.hoverable} ${styles.link}`}>
              Projects
            </NavLink>
          </Col>
          <Col className={styles["nav-link"]}>
            <NavLink to="/Blog" className={`${styles.hoverable} ${styles.link}`}>
              Blog
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Navbar;
