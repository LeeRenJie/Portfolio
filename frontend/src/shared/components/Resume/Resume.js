import React from 'react'
import styles from './Resume.module.css'

const Resume = () => {
    return (
            <a 
            className={styles.resume} 
            href="resume.pdf"
            target="_blank"
            >
                <i className={`fas fa-download ${styles.icon}`}/>
                Resume
            </a>
    )
}

export default Resume;