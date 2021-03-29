import React from 'react';
import MyInfoCard from './MyInfoCard'
import styles from './MyInfo.module.css'

const MyInfo = () => {
    return(
        <div>
            <div className={styles.title}>
                <h1>About me</h1>
            </div>
            <MyInfoCard />
        </div>

        )
}

export default MyInfo;