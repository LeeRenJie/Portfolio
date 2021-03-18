import React from 'react';
import  styles from './Socials.module.css'

const Socials = () => {
    return(
        <div className={styles["social-container"]}>
            <div className={styles["social-position"]}>
            <a 
            className={`${styles["social-link"]}  ${styles["social-animate1"]}`} 
            target="_blank" 
            rel="noreferrer" 
            href="https://www.linkedin.com/in/leerenjie/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
            className={`${styles["social-link"]}  ${styles["social-animate2"]}`} 
            target="_blank" 
            rel="noreferrer" 
            href="https://github.com/LeeRenJie">
                <i className="fab fa-github"/>
                </a>
            <a 
            className={`${styles["social-link"]}  ${styles["social-animate3"]}`} 
            target="_blank" 
            rel="noreferrer" 
            href="https://stackoverflow.com/users/story/14742922">
                <i className="fab fa-stack-overflow"/>
                </a>
            <a 
            className={`${styles["social-link"]}  ${styles["social-animate4"]}`} 
            target="_blank" 
            rel="noreferrer" 
            href="https://web.facebook.com/RJ.Leee/">
                <i className="fab fa-facebook-f"/>
                </a>
                </div>
        </div>
        )
};

export default Socials;