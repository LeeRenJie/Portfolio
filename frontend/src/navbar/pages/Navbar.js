import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeMobileMenu = () => setIsNavOpen(false);

  return (
    <Fragment>
      <nav className={styles["navbar-div"]}>
        <div className={styles["menu-icon"]} onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <NavLink
          to="/"
          className={styles.title}
          onClick={closeMobileMenu}
          exact={true}
        >
          Lee Ren Jie
      </NavLink>
        <ul
          className={
            isNavOpen
              ? `${styles["nav-menu"]} ${styles["active"]}`
              : styles["nav-menu"]
          }
        >
          <li className={styles["nav-item"]}>
            <NavLink
              activeClassName={styles["active-link"]}
              to="/"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeClassName={styles["active-link"]}
              to="/About"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
            >
              About 
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeClassName={styles["active-link"]}
              to="/Education"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
            >
              Education
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeClassName={styles["active-link"]}
              to="/Experience"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
            >
              Experience
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              activeClassName={styles["active-link"]}
              to="/Projects"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/Blog"
              className={styles["nav-links"]}
              onClick={closeMobileMenu}
              activeClassName={styles["active-link"]}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
    
  );
};

export default Navbar;