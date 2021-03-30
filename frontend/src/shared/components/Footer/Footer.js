import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
            <footer className={styles.footer}>
                <p className={styles.copyright}>Made with love by Lee Ren Jie &#169; {year} </p>
            </footer>
    )
}

export default Footer;
