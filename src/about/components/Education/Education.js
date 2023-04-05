import React from 'react';
import EducationList from './EducationList'
import styles from '../../shared/styles/Title.module.scss'

const Education = () => {
    return(
        <>
            <div className={styles['title-container']}>
                <h1 className={styles.title}>
                My Education Pathway
                </h1>
            </div>
            <EducationList/>
        </>
        )
}

export default Education;