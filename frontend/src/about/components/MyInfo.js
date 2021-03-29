import React from 'react';
import MyInfoCard from './MyInfoCard'
import styles from './MyInfo.module.css'

const MyInfo = () => {
    return(
        <div>
            <div className={styles["title-container"]}>
                <h1 className={styles.title}>About Me</h1>
            </div>
            <MyInfoCard />
        </div>

        )
}

export default MyInfo;