import React from 'react';
import styles from '../../shared/styles/Title.module.scss'

const ProjectsTitle = () => {
    return(
        <div className={styles['title-container']}>
            <h1 className={styles.title}>
            Projects
            </h1>
        </div>
        )
}

export default ProjectsTitle;