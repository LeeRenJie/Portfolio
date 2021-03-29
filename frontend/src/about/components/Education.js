import React from 'react';
import Timeline from './Timeline'
import styles from './Education.module.css'

const Education = () => {
    return(
        <>
            <div>
                <h1 className={styles.title}>
                My Education Pathway
                </h1>
            </div>
            <Timeline />
        </>
        )
}

export default Education;