import React from 'react';
// import Footer from "../../shared/components/Footer/Footer"
import styles from '../../shared/styles/Title.module.scss'
import ExperienceList from '../components/Experience/ExperienceList';

const Experience = () => {
    return(
        <div className="black-bg">
            <div className={styles['title-container']}>
                <h1 className={styles.title}>
                    Experiences
                </h1>
            </div>
            <ExperienceList/>
        </div>
        )
};

export default Experience;