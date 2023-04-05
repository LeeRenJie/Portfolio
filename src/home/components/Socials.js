import React from 'react';
import  styles from './Socials.module.css';

const Socials = () => {
  return(
    <div className={styles["social-container"]}>
      <a
        className={`${styles["social-link"]} ${styles["social-animate1"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/leerenjie/"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        className={`${styles["social-link"]}  ${styles["social-animate2"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/LeeRenJie"
      >
        <i className="fab fa-github"/>
      </a>

      <a
        className={`${styles["social-link"]} ${styles["social-animate3"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/users/14742922/lee-ren-jie"
      >
        <i className="fab fa-stack-overflow"/>
      </a>

      <a
        className={`${styles["social-link"]} ${styles["social-animate4"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/TechWithRJ2"
      >
        <i className="fab fa-twitter"/>
      </a>

      <a
        className={`${styles["social-link"]} ${styles["social-animate5"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://dev.to/leerenjie"
      >
        <i className="fab fa-dev"/>
      </a>

      <a
        className={`${styles["social-link"]} ${styles["social-animate6"]}`}
        target="_blank"
        rel="noreferrer"
        href="https://tech-with-rj.medium.com/"
      >
        <i className="fab fa-medium-m"/>
      </a>

      <a
        className={`${styles["social-link"]}  ${styles["social-animate7"]}`}
        target="_blank"
        rel="noreferrer"
        href="mailto:work.renjie@gmail.com"
      >
        <i className="far fa-envelope"/>
      </a>
    </div>
  );
};

export default Socials;