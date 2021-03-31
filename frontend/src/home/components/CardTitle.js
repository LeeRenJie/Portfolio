import React from 'react';
import styles from './CardTitle.module.css'

const CardTitle = () => {
    return(
        <div className={styles.title}>
            <img className={styles.avatar} src="images/splash.jpg" alt="Avatar"/>
            <h6 className={styles.intro}>Hi, I am</h6>
            <h1 className={styles.name}>LEE REN JIE</h1>
        </div>)
}

export default CardTitle;