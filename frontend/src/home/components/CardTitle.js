import React from 'react';
import styles from './CardTitle.module.css'
import splash from "./splash.jpg"

const CardTitle = () => {
    return(
        <div className={styles.title}>
            <img className={styles.avatar} src={splash} alt="Avatar"/>
            <h1 className={styles.name}>LEE REN JIE</h1>
        </div>)
}

export default CardTitle;